import React from 'react';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

class FacebookLoginComponent extends React.Component {

    responseFacebook = (response) => {
        console.log("Facebook Login ",response);
        let userObj = { email : response.email, username : response.name, userId : response.userID, 
        firstname : response.name, lastname : "", token : response.accessToken};
        if(response.accessToken){
            this.facebookLogin(userObj);
        }
    }

    facebookLogin = (userObj) => {
        axios.post(endPoints.facebookLoginEndPoint, userObj).then((response)=>{
            console.log("Facebook LogIn Success ",response);
            localStorage.setItem('token',response.data.token);
            this.props.history.push('/home');
        }).catch((error)=>{
            console.log("Error during Facebook LogIn ",error);
        });
    }

    render(){

        return(
            <FacebookLogin 
            appId="396310434330822"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
            cssClass="my-facebook-button-class"
            icon="fa-facebook"
            ></FacebookLogin>
            )
    }

}

export default withRouter(FacebookLoginComponent);