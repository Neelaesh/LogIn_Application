import logIn from '../Reducers/logInReducer';
import signUp from '../Reducers/signUpReducer';
import googleLogIn from '../Reducers/googleLogInReducer';
import facebookLogIn from '../Reducers/facebookLoginReducer';
import logOut from '../Reducers/logOutReducer';

import { combineReducers } from 'redux';

const appReducer = combineReducers({
    logIn, 
    signUp,
    googleLogIn,
    facebookLogIn,
    logOut
});

const rootReducer = (state, action) => {
    if(action.type === 'LOG_OUT'){
        state = undefined
    }
    return appReducer(state, action);
}

export default rootReducer;