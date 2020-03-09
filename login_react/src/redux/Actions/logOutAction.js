import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

export const types = {
    LOG_OUT : 'LOG_OUT'
}

// User Log Out
export function logOut(user, axiosConfig, history){
    console.log("Log Out Action ",user);
    console.log("Log Out History ",history);
    return (dispatch, getState) => {
        axios.post(endPoints.logOutEndPoint, user, axiosConfig).then((userDetails) => {
            console.log("User Logged Out ",userDetails);
            localStorage.removeItem('token');
            dispatch(userLogOut(userDetails.data));
            history.push('/');
        }).catch((err) => {
            console.log("Error ",err);
            console.log("Error Message ",error.response.data.message);
            history.push({
                pathname : '/error',
                state : { message : error.response.data.message, status : error.response.data.status }
            });
        });
    }
}

export function userLogOut(user){
    return {
        type : types.LOG_OUT,
        user
    }
}