import React,{PureComponent} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {actionCreators} from './store'
import {connect} from 'react-redux'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            // <div>home</div>
            <HomeWrapper>
               <HomeLeft>
                    <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft> 
               <HomeRight>
                   <Recommend></Recommend>
                   <Writer></Writer>
               </HomeRight>
               {this.props.showScroll? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
            </HomeWrapper>
        )
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch =(dispatch)=>({
    changeHomeData(action){
      const actions  = actionCreators.getHomeInfo();
        dispatch(actions)
    },
    changeScrollTopShow(e){
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop>120) {
            dispatch(actionCreators.toggleTopShow(true))
        } else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
}) 
export default connect(mapState,mapDispatch)(Home);