import axios from 'axios';

//axios实例
const service =axios.create({
  timeout:5000
})

//请求拦截
service.interceptors.request.use(
  config=>{
    return config
  },
  err =>{
    return Promise.reject(err)
  }
)

//响应拦截
service.interceptors.response.use(
  response =>{
    return response
  },
  err =>{
    return Promise.reject(err)
  }
)

export function get(url,params){
  return service.get(url,{
    params
  })
}