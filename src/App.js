import React, { Component } from 'react'
import Header from './common/header/index';
import {Provider} from 'react-redux'
import store from './store/index.js'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
import {BrowserRouter, Route} from 'react-router-dom'

import { GlobalStyle} from "./style"
import {GlobalStyleIcon } from'./statics/iconfont/iconfont'
export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <GlobalStyleIcon />
        {/* Provider把store提供给内部的Header */}
        <Provider store={store}>
   
        <BrowserRouter>
        <Header />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/write" component={Write}></Route>
        </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

