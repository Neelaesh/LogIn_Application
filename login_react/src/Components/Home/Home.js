import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

import DeleteUserModal from '../Modal/DeleteUserModal';
import UnLinkModal from '../Modal/UnLinkModal';

import axios from 'axios';
import endPoints from '../../ServerEndPoints/serverEndPoints';

class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            showDeleteModal : false,
            deleteModalMessage : null,
            deleteStatus : false,
            showUnLinkGoogleModal : false,
            unLinkGoogleModalMessage : null,
            unLinkGoogleStatus : false,
            googleAccountLinked : false,
            showUnLinkFacebookModal : false,
            unLinkFacebookModalMessage : null,
            unLinkFacebookStatus : false,
            facebookAccountLinked : false,
        };
    }

    componentDidMount(){
        console.log("Home Did Mount ",this.props);
        this.setAccountLinkedStatus();
    }

    componentWillReceiveProps(nextProps){
        console.log("Home WillReceiveProps ",nextProps);
    }

    setAccountLinkedStatus = () => {
        if(this.props.user.googleAccountLinked) {
            this.setState({
                googleAccountLinked : true
            });
        }
        if(this.props.user.facebookAccountLinked) {
            this.setState({
                facebookAccountLinked : true
            });
        }
    }

    deleteUser = () => {
        console.log("Delete User Email ",this.props.user.email);
        this.setState({
            showDeleteModal : true,
            modalMessage : 'Are you sure you want to Delete the Account?'
        });
    }

    deleteUserModalClose = (show, deleteStatus) => {
        console.log(`Pop Up Status ${show} ${deleteStatus} `);
        this.setState({
            showDeleteModal : show,
            deleteStatus
        }, ()=> {
            if(this.state.deleteStatus){
                let user = {
                    email : this.props.user.email
                }
                this.props.deleteUser(user, this.props.history);
            }
        }); 
    }

    unLinkGoogle = () => {
        console.log("Unlink Google Email ",this.props.user.email);
        this.setState({
            showUnLinkGoogleModal : true,
            unLinkGoogleModalTitle : "UnLink Google",
            unLinkGoogleModalMessage : 'Are you sure you want to Unlink the Google Account?'
        });
    }

    unLinkGoogleModalClose = (show, unLinkGoogleStatus) => {
        console.log(`Pop Up Status ${show} ${unLinkGoogleStatus} `);
        if(unLinkGoogleStatus){
            let user = {
                email : this.props.user.email
            }
            axios.post(endPoints.unLinkGoogleEndPoint, user).then((userDetails)=>{
                console.log("Unlink Google ",userDetails);
                this.setState({
                    showUnLinkGoogleModal : show,
                    unLinkGoogleStatus,
                    googleAccountLinked : false
                });
            }).catch((error)=>{
                console.log("Error Message ",error);
                this.props.history.push({
                    pathname : '/error',
                    state : { message : error.response.data.message, status : error.response.data.status }
                });
            });
        }        
    }

    unLinkFacebook = () => {
        console.log("Unlink Facebook Email ",this.props.user.email);
        this.setState({
            showUnLinkFacebookModal : true,
            unLinkFacebookModalTitle : "UnLink Facebook",
            unLinkFacebookModalMessage : 'Are you sure you want to Unlink the Facebook Account?'
        });
    }

    unLinkFacebookModalClose = (show, unLinkFacebookStatus) => {
        console.log(`Pop Up Status ${show} ${unLinkFacebookStatus} `);
        if(unLinkFacebookStatus){
            let user = {
                email : this.props.user.email
            }
            axios.post(endPoints.unLinkFacebookEndPoint, user).then((userDetails)=>{
                console.log("Unlink Facebook ",userDetails);
                this.setState({
                    showUnLinkFacebookModal : show,
                    unLinkFacebookStatus,
                    facebookAccountLinked : false
                });
            }).catch((error)=>{
                console.log("Error Message ",error);
                this.props.history.push({
                    pathname : '/error',
                    state : { message : error.response.data.message, status : error.response.data.status }
                });
            });
        }         
    }

    render(){
        return(
            <div>
                <center>
                    <h2>My Profile</h2><br/><br/>
                    {   
                        this.state.googleAccountLinked ?
                        <div>
                            <Button variant="outline-info" onClick={this.unLinkGoogle}>Un Link Google Account</Button><br/><br/>
                        </div>
                        :
                        <div>
                            <Button variant="outline-info" >Link  Account To Google</Button><br/><br/>
                        </div> 
                    }
                    {
                        this.state.showUnLinkGoogleModal &&
                        <UnLinkModal show={this.state.showUnLinkGoogleModal} 
                        modalTitle={this.state.unLinkGoogleModalTitle}
                        modalMessage={this.state.unLinkGoogleModalMessage}
                        handleModalClose={this.unLinkGoogleModalClose}></UnLinkModal>
                    }
                    {   
                        this.state.facebookAccountLinked ? 
                        <div>
                            <Button variant="outline-info" onClick={this.unLinkFacebook}>Un Link FaceBook Account</Button><br/><br/>
                        </div>
                        :
                        <div>
                            <Button variant="outline-info">Link Account To FaceBook</Button><br/><br/>
                        </div>
                    }
                    {
                        this.state.showUnLinkFacebookModal &&
                        <UnLinkModal show={this.state.showUnLinkFacebookModal} 
                        modalTitle={this.state.unLinkFacebookModalTitle}
                        modalMessage={this.state.unLinkFacebookModalMessage}
                        handleModalClose={this.unLinkFacebookModalClose}></UnLinkModal>
                    }
                    <Button variant="outline-danger" onClick={this.deleteUser}>Delete Account</Button>
                    {
                        this.state.showDeleteModal &&
                        <DeleteUserModal show={this.state.showDeleteModal} 
                        modalMessage={this.state.deleteModalMessage}
                        handleModalClose={this.deleteUserModalClose}></DeleteUserModal>
                    }
                </center>
            </div>
        )
    }

}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    console.log("Home mapStateToProps",state);
    if(state.logIn && state.logIn.username != ""){
        return {
            user : state.logIn
        }
    }
    if(state.googleLogIn && state.googleLogIn.username != ""){
        return {
            user : state.googleLogIn
        }
    }
    if(state.facebookLogIn && state.facebookLogIn.username != ""){
        return {
            user : state.facebookLogIn
        }
    }
    // Returning Empty Object by Default
    return {

    }
}

export default connect(mapStateToProps)(withRouter(Home));