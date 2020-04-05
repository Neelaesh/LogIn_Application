import logIn from '../Reducers/logInReducer';
import signUp from '../Reducers/signUpReducer';
import googleLogIn from '../Reducers/googleLogInReducer';
import facebookLogIn from '../Reducers/facebookLoginReducer';
import logOut from '../Reducers/logOutReducer';
import deleteUser from '../Reducers/deleteUserReducer';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
    logIn, 
    signUp,
    googleLogIn,
    facebookLogIn,
    logOut,
    deleteUser
});

const rootReducer = (state, action) => {
    if(action.type === 'LOG_OUT'){
        state = undefined
    }
    return appReducer(state, action);
}

export default rootReducer;