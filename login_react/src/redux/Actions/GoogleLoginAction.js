import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

export const types = {
    LOG_IN : 'LOG_IN'
}

// Google Login Action
export function googleLogin(googleLogin, history){
    console.log("Google LogIn Action ",user);
    console.log("Google LogIn Action History ",history);
    axios.post(endPoints.googleLoginEndPoint, googleLogin).then((response)=>{
        console.log("Google LogIn Success ",response);
        localStorage.setItem('token',response.data.token);
        dispatch(userGoogleLogin(response.data));
        history.push('/home');
    }).catch((error)=>{
        console.log("Error Message ",error.response.data.message);
        history.push({
            pathname : '/error',
            state : { message : error.response.data.message, status : error.response.data.status }
        });
    });
}

export function userGoogleLogin(googleLogin){
    console.log("Google Login Action",googleLogin);
    return {
        type : types.LOG_IN,
        googleLogin
    }
}