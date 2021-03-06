import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../RootReducer/rootReducer';

const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
// Creation of Store without using Redux Dev Tools
// const store = createStore(allReducers, compose(applyMiddleware(thunk)));

export default store;