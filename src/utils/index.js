/**
 * localStorage函数工具
 * @param {String} name 需要存储localstrong的名
 * @param {String} name 需要存储localstrong的值
 */

export const setStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
        content = JSON.stringify(content)
    }
    window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return
    return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return
    window.localStorage.removeItem(name)
}


/************************************************************************************
 * 设置token
 */
export const setToken = (KEY, token) => {
    window.localStorage.setItem(KEY, token);
}

/**
 * 获取token
 */
export const getToken = KEY => {
    return window.localStorage.getItem(KEY);
}

/**
 * 删除token
 */
export const removeToken = KEY => {
    //根据key,删除指定的值
    window.localStorage.removeItem(KEY);
}

/************************************************************************************
 * 保存cookie
 * @param {String} name 需要存储cookie的key
 * @param {String} value 需要存储cookie的value
 * @param {Number} timer 默认存储多少天
 */
export const setCookie = (name, value, timer = 1) => {
    var Days = timer; //默认将被保存 1 天
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * 获取cookie
 * @param {String} name 需要获取cookie的key
 */
export const getCookie = name => {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) {
        return unescape(arr[2])
    } else {
        return null
    }
}

/**
 * 删除cookie
 * @param {String} name 需要删除cookie的key
 */
export const clearCookie = (name) => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}