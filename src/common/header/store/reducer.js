import * as actionTypes from './actionTypes'
import {fromJS} from  'immutable'
const defalutState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
})//默认值
// 返回一个纯函数（给该固定值就输出）
export default (state=defalutState,action)=>{  
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
            // return state.set('list',action.data).set('totalPage',action.totalPage);
            case actionTypes.MOUSE_ENTER:
                return state.set('mouseIn',true);
            case actionTypes.CHANGE_PAGE:
                return state.set('page',action.page);
        default:
            return state;
    }
}