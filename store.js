import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import winChecker from "./middleware/winChecker";
import actionLogger from "./middleware/actionLogger";

let initialState = {
    board: [ '', '', '', '', '', '', '', '', ''],
    currentPlayer: "X",
    winner: null
};

let composeEnhancers;

if (process.env.NODE_ENV !== 'production' && typeof window !== "undefined") {
    composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
} else {
    composeEnhancers = compose;
}

let store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(winChecker, actionLogger)));
export default store