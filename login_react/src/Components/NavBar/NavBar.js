import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import * as logOutActions from '../../redux/Actions/logOutAction';

class NavBar extends React.Component {

    constructor(){
        super();
        this.state = {
            showUser : false
        }
    }

    componentDidMount(){
        console.log("Nav Bar Did Mount");
    }

    componentWillReceiveProps(nextProps){
        console.log("NavBar Will Receive Props ",nextProps);
        console.log("Token ",localStorage.getItem('token'));
        if(localStorage.getItem('token')){
            this.setState({
                showUser : true
            });
        }
        else{
            this.setState({
                showUser : false
            });
        }
    }

    logOut = () => {
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
            email : this.props.user.email
        }
        this.props.logOut(loggedInUser, axiosConfig, this.props.history);
    }

    render(){
        console.log("Rendering Nav Bar ",this.state.showUser);
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/home">User LogIn Application</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                { this.state.showUser ?  
                    <div>
                        <Navbar.Text bg="primary" variant="dark">
                        Signed in as: { this.props.user.firstname + " " + this.props.user.lastname }
                        </Navbar.Text>
                        &nbsp;&nbsp;
                        <Button variant="secondary" onClick={this.logOut}>Log Out</Button>
                    </div>
                    : <div></div>
                }
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log("NavBar mapStateToProps",state);
    if(state.logIn.username != ""){
        return {
            user : state.logIn
        }
    }
    if(state.googleLogIn.username != ""){
        return {
            user : state.googleLogIn
        }
    }
}

export default connect(mapStateToProps, logOutActions)(withRouter(NavBar));