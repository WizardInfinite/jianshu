import axios from 'axios'
import * as contants from './constants'

const changeLogin = ()=>({
    type:contants.CHANGE_LOGIN,
    value:true
})
export const logout = ()=>({
    type:contants.CHANGE_LOGOUT,
    value:false
})
export const login=(account,password)=>{
  return (dispatch)=>{
      axios.get('/api/login.json?account='+account+'&password='+password).then(res=>{
          const result = res.data.data;
         if(result){
            dispatch(changeLogin())
         }else{}
      })
  }
}