import React, { PureComponent } from 'react'
// 让组件可以使用redux中的store
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'
class Topic extends PureComponent {
    render() {
        const { List } = this.props;
        return (
            <TopicWrapper>
                {
                    List.map((item, index) =>
                        (
                            <TopicItem key={item.get("id")}>
                                <img className="topic-pic" src={item.get("imgUrl")} alt="" />
                                {item.get("title")}
                            </TopicItem>
                        )
                    )
                }

            </TopicWrapper>
        )
    }
}
const mapState = (state) => ({
    List: state.get('home').get('topicList')
});
// const mapDispatch=(dispatch)=>({})
export default connect(mapState, null)(Topic);