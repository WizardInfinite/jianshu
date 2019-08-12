import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// reducer相当于使用的手册
const store = createStore(
    reducer,composeEnhancers(applyMiddleware(thunk))
);
export default store;