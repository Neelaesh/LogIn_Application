import React from 'react';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';

class Home extends React.Component {

    componentDidMount(){
        console.log("Home Did Mount ",this.props.user);
        // localStorage.setItem('token', this.props.user.token);
    }

    render(){
        console.log("Home Render ",this.props.user);
        return(
            <div>
                <center>
                    <h2>My Profile</h2><br/><br/>
                    <Button variant="outline-info">Link  Account To Google</Button><br/><br/>
                    <Button variant="outline-info">Link Account To FaceBook</Button><br/><br/>
                    <Button variant="outline-danger">Delete Account</Button>
                </center>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log("Home mapStateToProps",state.logIn);
    return {
        user : state.logIn
    }
}

export default connect(mapStateToProps)(Home);