import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import AODReducer from './Reducer'


const RootReducer =combineReducers({
    AODReducer
})

export const Store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk)))