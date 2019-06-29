import axios from 'axios';
import endPoint from '../../ServerEndPoints/serverEndPoints';

export const types = {
    SIGN_UP : 'SIGN_UP'
}

// New User Sign Up
export function signUp(newUser, history){
    console.log("SignUp Action ",newUser);
    console.log("SignUp Action History ",history);
    return (dispatch, getState) => {
        axios.post(endPoint.signUpEndPoint, newUser).then((userDetails)=>{
            console.log("SignUp Success ",userDetails);
            console.log("SignUp Get State ",getState());
            dispatch(userSignUp(userDetails.data));
            // history.push({
            //     pathname : '/',
            //     state : { message : userDetails.data.message, status : userDetails.data.status }
            // });
        }).catch((error)=>{
            console.log("Error Message ",error);
            // history.push({
            //     pathname: '/error',
            //     state : { message : error.response.data.message, status : error.response.data.status }
            // })
        })
    }
}

export function userSignUp(newUser){
    console.log("User Sign Up Action",newUser);
    return {
        type: 'SIGN_UP',
        newUser
    }
}