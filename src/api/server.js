import axios from '@/api/config'

// 获取数据
export function getHomeApi() {
    return axios('UnsafeTypes', {
        method: 'GET'
    })
}

// 新增数据
export const AbnormalCheckingIns = (data) => {
    return axios('AbnormalCheckingIns', {
        method: 'POST',
        params: data
    })
}

// 编辑数据
export const shanchuData = (data) => {
    return axios('position', {
        method: 'PUT',
        params: data
    })
}

// 删除数据
export const deleteCamera = (data) => {
    return axios(`/camera/important/delete/id=${data.data}`, {
        method: 'DELETE'
    })
}

// 传递多参数
/**
* @overview 接口描述
* @param {string} id - 序号
* @param {string} name - 姓名
* @param {number} age - 年龄
*/
export const updata = async (id, name, age) => {
    const data = {
        id: id,
        name: name,
        age: age
    }
    const res = await axios('AbnormalCheckingIns', {
        method: 'POST',
        data: data
    })
    if (res.code === 10000) {
        return true
    } else {
        throw new Error(res.msg || '添加失败')
    }
}