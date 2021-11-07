import {createStore, combineReducers, applyMiddleware} from "redux";
import {mainReducer} from './reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    main: mainReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
