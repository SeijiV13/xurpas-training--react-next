import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleWare from 'redux-thunk';
import blogs from './blogs/reducers'
import { reducer as toastrReducer} from 'react-redux-toastr';
const bindMiddleWare = (middleware) => {
    return applyMiddleware(...middleware);
}

export const initStore = () => {
    return createStore(
        combineReducers({
          blogs,
          toastr: toastrReducer
        }),
        bindMiddleWare([thunkMiddleWare])
    )
}