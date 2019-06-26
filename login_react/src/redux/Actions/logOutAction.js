import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

const initialState = {
    email : ''
}

const types = {
    'LOG_OUT' : LOG_OUT
}

// User Log Out
export function logOut(user, history){
    console.log("Log Out Action ",user);
    console.log("Log Out History ",history);
    return (dispatch) => {
        let token = localStorage.getItem('token');
        console.log("Token ",token);
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Authorization' :  token
            }
        };
        let loggedInUser = {
            email : user.email
        }
        axios.post(endPoints.logOutEndPoint, loggedInUser, axiosConfig).then((response) => {
            console.log("User Logged Out ",response);
            localStorage.removeItem('token');
            history.push('/');
        }).catch((err) => {
            console.log("Error while Logging Out ",err);
        });
    }
}

export function userLogOut(user){
    return {
        type : LOG_OUT,
        user
    }
}