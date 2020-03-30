import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

export const types = {
    LOG_IN : 'LOG_IN'
}

// Google Login Action
export function logIn(userObj, history){
    console.log("Google LogIn Action ",userObj);
    console.log("Google LogIn Action History ",history);
    return (dispatch, getState) => {
        axios.post(endPoints.googleLoginEndPoint, userObj, { headers: { access_token : userObj.access_token}}).then((response)=>{
                console.log("Google LogIn Success ",response);
                console.log("Google LogIn Get State ",getState());
                console.log("Response ",response);
                console.log("Response Code",response.status);
                if(response.data.token != undefined || response.data.token != ''){
                    localStorage.setItem('token', response.data.token);
                    dispatch(userGoogleLogin(response.data));
                    history.push('/home');
                }
            }).catch((error)=>{
                console.log("error ",error);
                console.log("Error Message ",error.response.data.message);
                history.push({
                    pathname : '/error',
                    state : { message : error.response.data.message, status : error.response.data.status }
                });
            });
    }
}

export function userGoogleLogin(logIn){
    console.log("Google Login Action",logIn);
    return {
            type : types.LOG_IN,
            logIn
        }  
}