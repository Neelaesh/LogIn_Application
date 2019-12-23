import React from 'react';
import { withRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';
import config from '../../Configuration/config';

class GoogleLoginComponent extends React.Component {

    responseGoogle = (response) => {
        console.log("Google Login ",response);
        console.log("Google Login Email ",response.profileObj.email);
        console.log("Google Login GivenName ",response.profileObj.givenName);
        console.log("Google Login FamilyName ",response.profileObj.familyName);
        let userObj = { email : response.profileObj.email, username : response.profileObj.name, 
        firstname : response.profileObj.givenName, lastname : "", access_token : response.accessToken };
        if(response.profileObj.familyName!= undefined){
            userObj.lastname = response.profileObj.familyName;
        }
        if(response.accessToken){
            this.googleLogin(userObj);
        }
    }

    googleLogin = (userObj) => {
        console.log("Google LogIn Success ",userObj);
        /* let userAuth = {
            user : userObj
        }
        console.log("userAuth ",userObj); */
        axios.post(endPoints.googleLoginEndPoint, userObj, { headers: { access_token : userObj.access_token } }).then(res => {
            console.log("Response ",res);
            console.log("Response Code",res.status);
            localStorage.setItem('token', res.data.token);
            this.props.history.push('/home');
        }).catch(error => {
          console.log("Error ",error.message);
          if(error){
            let errorMessage = error.message;
            let statusCode = errorMessage.substring(errorMessage.length-3, errorMessage.length);
            console.log("statusCode ",statusCode);
          }
        })
    }

    render(){
        return(
            <GoogleLogin clientId={config.googleClientID}
            buttonText="Login with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'} ></GoogleLogin>
        )
    }

}

export default withRouter(GoogleLoginComponent);