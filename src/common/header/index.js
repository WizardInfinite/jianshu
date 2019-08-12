import React,{Component} from 'react'
// Provider前提是要链接
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {Link} from 'react-router-dom'
import { 
    HeaderWrapper,
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button, 
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
 } from './style'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
class Header extends Component{
    getListArea(){
        const {focused,list,mouseIn,page,totalPage,hadleMouseEnter,hadleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for (let i = (page-1)*10; i < page*10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
                
            }
        }  
        if(focused || mouseIn){
            return (
                <SearchInfo onMouseEnter={hadleMouseEnter} onMouseLeave={hadleMouseLeave}> 
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                    <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe606;</i>
                        换一换
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {/* <SearchInfoItem>教育</SearchInfoItem> */}
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null;
        }
        
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,logout} = this.props;
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo /></Link>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        {
                            login? <NavItem onClick={logout} className="right">退出</NavItem>:
                            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                        }
                        <NavItem className="right">
                            <i className="iconfont">&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch className={focused?'focused':''}
                             onFocus={()=>handleInputFocus(list)}
                             onBlur={handleInputBlur}
                             ></NavSearch>
                             </CSSTransition>
                            <i className={focused?'focused iconfont zoom':'iconfont zoom'}>&#xe725;</i>
                           {this.getListArea()}
                        </SearchWrapper> 
                    </Nav>
                    <Addition>
                        <Link to="/write">
                        <Button className="writing">
                            <i className="iconfont">&#xe62f;</i>
                            写文章
                    </Button>
                    </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
        )
    }
}



// 接受state里的所有数据给props
const mapStateToProps= (state)=>{
    return {
        // 将state的数据映射成focused放到props的属性之中
        focused:state.get('header').get('focused'),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        login:state.getIn(['login','login'])
    }
}
// 改变store的内容都写在mapDispatchToProps
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(list){
            
            if(list.size===0){
                dispatch(actionCreators.getList())
            }

            // const action = {
            //     type:'search_focus'
            // }
            // 将action发给store
            
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            // const action = {
            //     type:'search_blur'
            // }
            dispatch(actionCreators.searchBlur())
        },
        hadleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        hadleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if(originAngle){
                originAngle = parseInt(originAngle,10)
                console.log(originAngle)
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
            // dispatch(actionCreators.changePage())
        },
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
