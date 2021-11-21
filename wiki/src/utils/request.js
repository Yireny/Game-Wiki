import axios from 'axios';

//axios实例
const service =axios.create({
  baseURL:'/',
  timeout:5000
})


//axios请求拦截器
service.interceptors.request.use(
  config=>{
    config.data=JSON.stringify(config.data)
    config.headers={

    }
    return config
  },
  err=>{
    console.log(err)
  }
)

//axios响应拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log('请求错误',error)
  }
)

export default service
