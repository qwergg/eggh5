import api from './content'
import axios from '../utils/request'


export  function getReq(params,methodUrl){
    return axios({
        url:api[methodUrl],
        method:'GET',
        params:params
    })
}

export function postReq(params,methodUrl){
    return axios({
        url:api[methodUrl],
        method:'POST',
        data:params
    })
}