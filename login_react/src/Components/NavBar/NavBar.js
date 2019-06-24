import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class NavBar extends React.Component {

    constructor(){
        super();
        this.state = {
            showUser : false
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("NavBar Will Receive Props ",nextProps);
        if(nextProps.user){
            this.setState({
                showUser : true
            })
        }
    }

    logOut = () => {
        this.setState({
            showUser : false
        }, ()=> {
            this.props.history.push('/');
        })
    }

    render(){
        return(
            <div>
                <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/home">User LogIn Application</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                { this.state.showUser && 
                    <div>
                        <Navbar.Text bg="primary" variant="dark">
                        Signed in as: { this.props.user.firstname + " " + this.props.user.lastname }
                        </Navbar.Text>
                        &nbsp;&nbsp;
                        <Button variant="secondary" onClick={this.logOut}>Log Out</Button>
                    </div>
                }
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log("NavBar mapStateToProps",state.logIn);
    return {
        user : state.logIn
    }
}

export default connect(mapStateToProps)(withRouter(NavBar));