import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';

const createRequest = (options: any): any => {
    const baseOptions = {
        timeout: 60 * 1000,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const instance = axios.create({...baseOptions, ...options})

    instance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            // 可在这里做一些数据的校验。
            // session的校验等。
            return config
        },
        (error: AxiosError) => {
            return error
        }
    )

// 响应拦截
    instance.interceptors.response.use((result: AxiosResponse) => {
        if (result.status === 200) {
            return Promise.resolve(result.data);
        } else {
            alert("网络异常");
            return Promise.reject(result);
        }
    }, (err: AxiosError) => {
        // 返回数据前做了什么
        return Promise.reject(err)
    })

    return instance
}

export default createRequest