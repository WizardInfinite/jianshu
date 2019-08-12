import axios from 'axios'
import * as constants from './constants'
import {fromJS} from 'immutable'
const changeHomeData = (result)=>({
    type:constants.CHANGE_HOME_DATA,
    // 下面是传递的内容,之后将这些内容派发给store
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList
})
const addHomeList = (list,nextPage)=>({
    type:constants.ADD_LIST,
    list:fromJS(list)
})
export const getHomeInfo = ()=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            // 改store的数据
            const action = changeHomeData(result)
            dispatch(action)
            console.log(result);
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result = res.data.data;
            // 改store的数据
           dispatch(addHomeList(result,page+1))
        }).catch((err)=>{
            console.log(err)
        })
    }
}
export const toggleTopShow = (show)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})