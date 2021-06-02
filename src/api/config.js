import axios from 'axios'
import { Loading, Message } from 'element-ui';

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 接口错误拦截
// 所有的网络请求都会先走这个方法
let abc = ""
axios.interceptors.request.use(config => {
    console.log('全局请求拦截')
    let res = config
    let loadingInstance = Loading.service({
        lock: true,
        text: '正在加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.5)'
    });
    abc = loadingInstance
    return res;
}, (error) => {
    abc.close();
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    console.log('全局响应拦截')
    if (response) {
        abc.close();
        return response
    } else {
        abc.close();
    }
}, (error) => {
    abc.close();
    Message.error('连接超时请重试');
    return Promise.reject(error);
});

export default axios