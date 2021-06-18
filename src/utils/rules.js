// 表单验证函数

/*
 * 验证手机号是否合格
 * true--说明合格
 */
export const isPhone = (rule, value, callback) => {
    let myreg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    if (!myreg.test(value)) {
        console.log(value)
        callback(new Error('请输入正确的手机号'));
    } else {
        callback();
        return true;
    }
}


/*
 * 验证字符串是否为空（也不能为纯空格）
 * true--说明为空， false--说明不为空
 */
export const isEmptyString = (string) => {
    if (
        string == undefined ||
        typeof string == 'undefined' ||
        !string ||
        string == null ||
        string == '' ||
        /^\s+$/gi.test(string)
    ) {
        return true;
    } else {
        return false;
    }
}

/*
 * 验证是否为数字
 */
export const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
}