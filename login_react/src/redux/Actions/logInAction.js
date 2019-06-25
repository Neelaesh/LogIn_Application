import axios from 'axios';
import endPoint from '../../ServerEndPoints/serverEndPoints';

export const types = {
    LOG_IN : 'LOG_IN'
}

// New User Log In
export function logIn(user, history){
    console.log("LogIn Action ",user);
    console.log("LogIn Action History ",history);
    return (dispatch, getState) => {
        axios.post(endPoint.logInEndPoint, user).then((userDetails)=>{
            console.log("LogIn Success ",userDetails.data);
            console.log("LogIn Get State ",getState());
            localStorage.setItem('token', userDetails.data.token);
            dispatch(userLogIn(userDetails.data));
            history.push('/home');
        }).catch((error)=>{
            console.log("Error Message ",error.response.data.message);
            history.push({
                pathname : '/error',
                state : { message : error.response.data.message, status : error.response.data.status }
            });
        });
    }
}

export function userLogIn(user){
    console.log("User Login Action",user);
    return {
        type : types.LOG_IN,
        user
    }
}