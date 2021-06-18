<template>
    <el-dialog :title="title" width="600px" :visible.sync="visible" destroy-on-close @close="closeCallback">
    <div class="card">
        <p class="title"><i class="fa fa-th-large fa-lg"></i>个人资料</p>
        <el-form :model="Form" status-icon :rules="rules" ref="Form" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="Form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="Form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="Form.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="Form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="Form.sex">
                <el-radio label="1">男</el-radio>
                <el-radio label="2">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model="Form.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobilePhone">
                <el-input v-model="Form.mobilePhone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('Form')">提 交</el-button>
                <el-button @click="resetForm()">重 置</el-button>
            </el-form-item>
        </el-form>
    </div>
  </el-dialog>
</template>

<script>
import { isPhone } from '@/utils/rules'
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
        return {
            visible: this.dialogVisible,
            Form: {
                mobilePhone: "",
                username: "",
                password: "",
                checkPass: "",
                roleId: "",
                sex: "1",
                age: "",
                name: ""
            },
            rules: {
                username: [
                    { required: true, message: "请输入用户名", trigger: "blur" },
                    { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
                ],
                mobilePhone: [
                    { required: true, message: "请输入手机号", trigger: "blur" },
                    { validator: isPhone, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        closeCallback() {
        },

        // 提交
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$emit("userinfoCallback", this.Form)
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