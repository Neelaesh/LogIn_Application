import logIn from '../Reducers/logInReducer';
import signUp from '../Reducers/signUpReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    logIn, 
    signUp
});