import * as actionTypes from './actionTypes'
import axios from 'axios';
import {fromJS} from 'immutable'
const changeList = (data)=>({
    type:actionTypes.CHANGE_LIST,
    // 将数据变成immutable类型
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const searchFocus = ()=>({
    type:actionTypes.SEARCH_FOCUS
})
export const searchBlur = ()=>({
    type:actionTypes.SEARCH_BLUR
})
export const mouseEnter=()=>({
    type:actionTypes.MOUSE_ENTER
})
export const mouseLeave=()=>({
    type:actionTypes.MOUSE_LEAVE
})
export const changePage=(page)=>({
    type:actionTypes.CHANGE_PAGE,
    page
})
export const getList =()=>{
    return(dispatch)=>{
        // console.log(123)
        axios.get('/api/headerList.json').then((res)=>{
            // const action =changeList(res.data.data)
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}