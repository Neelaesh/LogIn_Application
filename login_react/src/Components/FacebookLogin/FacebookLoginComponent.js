import React from 'react';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginComponent extends React.Component {

    responseFacebook = (response) => {
        console.log("Facebook Login ",response);
        let userObj = { email : response.email, username : response.name, userId : response.userID, 
        firstname : response.name, lastname : "", access_token : response.accessToken};
        if(response.accessToken){
            this.facebookLogin(userObj);
        }
    }

    facebookLogin = (userObj) => {
        this.props.facebookLogIn(userObj, this.props.history);
    }

    render(){

        return(
            <FacebookLogin 
            appId="396310434330822"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
            icon="fa-facebook"
            ></FacebookLogin>
            )
    }

}

export default withRouter(FacebookLoginComponent);