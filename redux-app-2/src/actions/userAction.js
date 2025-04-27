import { appStore } from '@/store/appStore'
import {serverCall} from '../includes/serverCall'

export const userAction=()=>{
    serverCall.fnSendGet("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{appStore.dispatch({
        type:'USERS',
        payload:res.data
    })
    })
    .catch(()=>{})
}