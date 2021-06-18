<template>
    <el-dialog :title="title" width="600px" :visible.sync="visible" destroy-on-close @close="closeCallback">
    <div class="card">
        <p class="title"><i class="fa fa-th-large fa-lg"></i>修改密码</p>
        <el-form :model="Form" status-icon :rules="rules" ref="Form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="原密码" prop="oldpassword">
                <el-input v-model="Form.oldpassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="Form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="surepassword">
                <el-input type="password" v-model="Form.surepassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('Form')">确 定</el-button>
                <el-button @click="resetForm()">重 置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </el-dialog>
</template>

<script>
export default {
    
    props: {
        title: {
            type: String,
            default: "账号信息"
        },
        dialogVisible: {
            type: Boolean,
            default: false
        }
    },
    data () {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"))
            } else if (value.toString().length < 6) {
                callback(new Error("密码长度不能低于6位"))
            } else {
                if (this.Form.checkPass !== "") {
                    this.$refs.Form.validateField("checkPass")
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"))
            } else if (value.toString().length < 6) {
                callback(new Error("密码长度不能低于6位"))
            } else if (value !== this.Form.password) {
                callback(new Error("两次输入密码不一致!"))
            } else {
                callback()
            }
        }
        return {
            visible: this.dialogVisible,
            Form: {
                oldpassword: "",
                password: "",
                surepassword: ""
            },
            rules: {
                oldpassword: [
                    {required: true, message: "请输入原密码", trigger: "blur"}
                ],
                password: [
                    {required: true, validator: validatePass, trigger: "blur"}
                ],
                surepassword: [
                    { required: true, validator: validatePass2, trigger: "blur" }
                ]
            }
        }
    },
    methods: {
        closeCallback () {
            this.$emit("passwordCallback")
        },
        
        // 提交
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$emit("passwordCallback", this.Form)
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },

        // 重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>

<style lang="scss" scoped>
    .card {
        width: 500px !important;
        .title {
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 20px 0px;
        }
    }
</style>