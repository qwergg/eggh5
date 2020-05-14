import axios from 'axios'
import router from '../router/index'


const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    timeout: 8000, // 请求超时时间毫秒
    responseType:'json'
  })

const err = (error) => { //err
    if (error.response) {
      const data = error.response.data
      if (error.response.status === 403) {
          notification.error({
          message: 'Forbidden',
          description: '资源不可用',
          duration:1.5
        })
      }else if(error.response.status === 401){
        notification.error({
         message: 'error',
         description: '安全令牌过期请重新登录',
         duration:1.5
       })
     }else if(error.response.status === 500){
         notification.error({
          message: 'error',
          description: '服务器内部错误',
          duration:1.5
        })
      }
    }
    return Promise.reject(error)
  } 

 
  service.interceptors.request.use(config=>{
      return config
  },err)

  service.interceptors.response.use((response) => {
      return response.data
  }, err)


export default service