import React from 'react';
import { withRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

class GoogleLoginComponent extends React.Component {

    responseGoogle = (response) => {
        console.log("Google Login ",response);
        console.log("Google Login Email ",response.profileObj.email);
        console.log("Google Login GivenName ",response.profileObj.givenName);
        console.log("Google Login FamilyName ",response.profileObj.familyName);
        let userObj = { email : response.profileObj.email, username : response.profileObj.name, 
        firstname : response.profileObj.givenName, lastname : "", token : response.accessToken };
        if(response.profileObj.familyName!= undefined){
            userObj.lastname = response.profileObj.familyName;
        }
        if(response.accessToken){
            this.googleLogin(userObj);
        }
    }

    googleLogin = (userObj) => {
        axios.post(endPoints.googleLoginEndPoint, userObj).then((response)=>{
            console.log("Google LogIn Success ",response);
            localStorage.setItem('token',response.data.token);
            this.props.history.push('/home');
        }).catch((error)=>{
            console.log("Error during Google LogIn ",error);
        });
    }

    render(){
        return(
            <GoogleLogin clientId="447077426441-3j7r29n1ob1drr9kefe13i6eujvdvets.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'} ></GoogleLogin>
        )
    }

}

export default withRouter(GoogleLoginComponent);