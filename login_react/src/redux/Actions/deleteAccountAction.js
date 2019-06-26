import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

const types = {
    DELETE_ACCOUNT : 'DELETE_ACCOUNT' 
}

// Delete Account Action
export function deleteAccount(user, history){
    console.log("Delete Account ",user);
    console.log("Delete Account History ",history);
    return (dispatch, getState) => {
        axios.post(endPoints.deleteAccountEndPoint, user).then((userDetails)=>{
            console.log("Delete Success ",userDetails);
            console.log("Delete Get State ",getState());
            localStorage.removeItem('token');
            dispatch(userDeleteAccount(userDetails.data));
            history.push('/');
        }).catch((error)=>{
            console.log("Error Message ",error);
            history.push({
                pathname : '/error',
                // state : { message : error.response.data.message, status : error.response.data.status }

            });
        });
    }
}

export function userDeleteAccount(user){
    return {
        type : types.DELETE_ACCOUNT,
        user
    }
} 