import React from 'react';
import { withRouter } from "react-router-dom";
import GoogleLogin from 'react-google-login';

import config from '../../Configuration/config';

class GoogleLoginComponent extends React.Component {

    componentWillReceiveProps(newProps){
        console.log("Google Login Component ",newProps);
    }

    googleLoginResponse = (googleResponse) => {
        console.log("Google Login ",googleResponse);
        let userObj = { email : googleResponse.profileObj.email, username : googleResponse.profileObj.name, 
        firstname : googleResponse.profileObj.givenName, lastname : "", access_token : googleResponse.accessToken };
        if(googleResponse.profileObj.familyName!= undefined){
            userObj.lastname = googleResponse.profileObj.familyName;
        }
        if(googleResponse.accessToken){
            this.googleLogin(userObj);
        }
    }

    googleLogin = (userObj) => {
        console.log("Google LogIn ",userObj);
        this.props.logIn(userObj, this.props.history);            
    }

    render(){
        return(
            <GoogleLogin clientId={config.googleClientID}
            buttonText="Login with Google"
            onSuccess={this.googleLoginResponse}
            onFailure={this.googleLoginResponse}
            cookiePolicy={'single_host_origin'} ></GoogleLogin>
        )
    }

}

export default withRouter(GoogleLoginComponent);