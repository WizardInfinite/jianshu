import axios from 'axios'
import * as contants from './constants'
const changeDetail = (title,content)=>({
    type:contants.CHANGE_DETAIL,
    title,
    content
})
export const getDetail=(id)=>{
    return(dispatch)=>{
        axios.get('/api/detail.json?id='+id).then(res=>{
            // console.log(res.data.data)
            dispatch(changeDetail(res.data.data.title,res.data.data.content))
        }).catch(err=>{
            console.log(err)
        })
    }
}