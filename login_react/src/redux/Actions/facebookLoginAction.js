import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

export const types = {
    LOG_IN : 'LOG_IN'
}

export function facebookLogIn(userObj, history){
    console.log("Facebook LogIn Action ",userObj);
    console.log("Facebook LogIn Action History ",history);
    return (dispatch, getState) => {
        axios.post(endPoints.facebookLoginEndPoint, userObj).then((response)=>{
            console.log("Facebook LogIn Success ",response);
            console.log("Facebook LogIn Get State ",getState());
            console.log("Response Code",response.status);
            if(response.data.token != undefined || response.data.token != ''){
                localStorage.setItem('token',response.data.token);
                dispatch(userFacebookLogin(response.data));
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

export function userFacebookLogin(facebookLogIn){
    console.log("Facebook Login Action",facebookLogIn);
    return {
        type : types.LOG_IN,
        facebookLogIn
    }
}