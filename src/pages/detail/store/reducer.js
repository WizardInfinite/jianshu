
import { fromJS } from 'immutable'
import * as constants from './constants'
const defalutState = fromJS({
  title:'',
  content:'通过李白、杜甫二人的诗作比对，表面看似李白一生都在游山玩水，杜甫一生穷困潦倒。其实不然，李白二十四岁才开始离开家乡，踏上远游的征途；但是，杜甫十九岁就开始游历郇瑕（今山东临沂），次年又游历吴越，直到二十三岁才赶回家乡参加“乡贡”，次年又到洛阳参加进士考试，遗憾落第。'
})//默认值
// 返回一个纯函数（给该固定值就输出）

export default (state = defalutState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
          return state.merge({
            title:action.title,
            content:action.content
          })
        default:
            return state;
    }
}