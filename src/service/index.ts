import createRequest from "./request";

let PROD = import.meta.env.PROD
console.log(import.meta.env)
let options = {
    baseURL: PROD ? 'http://42.192.190.187:6060' : 'http://127.0.0.1:6060'
    // baseURL: 'http://127.0.0.1:6060' // 本地
    // baseURL: 'http://42.192.190.187:6060' // 线上
}

const service = createRequest(options)

// 获取所有记录
export const getList = (data: any = {}) => service.post('/daily/list', data)

// 上传文件
export const uploadFile = (data: any = {}) => service.post('/daily/upload', data)

// 增加一条新数据
export const add = (data: any = {}) => service.post('/daily/add', data)
