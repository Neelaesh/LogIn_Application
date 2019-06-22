import logIn from '../Reducers/logInReducer';
import signUp from '../Reducers/signInReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({signUp, logIn});

export default rootReducer;