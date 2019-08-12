
import { fromJS } from 'immutable'
import * as constants from './constants'
const defalutState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
})//默认值
// 返回一个纯函数（给该固定值就输出）
const changeHomeData = (state,action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
}
const addList=(state,action)=>{
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    });
}
export default (state = defalutState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
           return changeHomeData(state,action)
        case constants.ADD_LIST:
            return addList(state,action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default:
            return state;
    }
}