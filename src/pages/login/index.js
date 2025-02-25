import React,{PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
}from './style'
class Login extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                   <LoginBox>
                   <Input placeholder="账号" ref={(input)=>{this.account=input}}></Input>
                   <Input placeholder="密码" type="password" ref={(input)=>{this.password=input}}></Input>
                   <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                   </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/"/>
        }
      
    }
   
}
const mapState = (state)=>({
    loginStatus:state.getIn(['login','login'])
})
const mapDispatch=(dispatch)=>({
  login(accountElement,passwordElement){
    //   console.log(accountElement.value,passwordElement.value)
    dispatch(actionCreators.login(accountElement.value,passwordElement.value))
  }
})
export default connect(mapState,mapDispatch)(Login);