
import { fromJS } from 'immutable'
import * as constants from './constants'
const defalutState = fromJS({
 login:false
})//默认值
// 返回一个纯函数（给该固定值就输出）

export default (state = defalutState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login',action.value)
            case constants.CHANGE_LOGOUT:
                    return state.set('login',action.value)
        default:
            return state;
    }
}