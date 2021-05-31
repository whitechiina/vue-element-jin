import axios from 'axios'

// 创建实例
const service = axios.create({
    // 请求超时
    timeout: 3000
})

// 添加请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        console.log(err)
    }
)

service.interceptors.response.use(response => {
    let res = {}
    res.status = response.status
    res.data = response.data
    return res
},
    err => console.log(err)
)