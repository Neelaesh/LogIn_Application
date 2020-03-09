import React from "react";
import { withRouter, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import GoogleLogin from '../../redux/Containers/googleLogInContainer';
import FacebookLoginComponent from '../FacebookLogin/FacebookLoginComponent';

class Login extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showButton : true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log("componentWillMount ",this.props);
  }

  componentWillReceiveProps(){
    console.log("LogIn componentWillReceiveProps ",this.props);
  }

  handleChange(event) {
    let obj = this.state;
    obj[event.target.name] = event.target.value;
    this.setState(obj, ()=> {
        if(this.state.email.length > 0 && this.state.password.length > 0){
            this.setState({
                showButton: false
            })
        } else {
            this.setState({
                showButton: true
            })
        }
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let logIn = {};
    logIn['email'] = this.state.email;
    logIn['password'] = this.state.password;
    console.log("LogIn ",logIn);
    if(this.state.email && this.state.password){
      this.props.logIn(logIn, this.props.history);
      this.forceUpdate();
    }
    else
      this.props.history.push('/error');
  }

  render() {
    return (
      <div>
        <center><h2>Log In Application</h2></center>
        <br/>
        <Container>
          <Row>
            <Col xs></Col>
            <Col xs={{ order: 12 }}></Col>
            <Col xs={{ order: 1 }}>
                <Form onSubmit={this.handleSubmit}>

                  <Form.Group controlId="email" className="form-group required">
                      <Form.Label className='control-label'>Email Address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter Email" 
                      onChange={this.handleChange.bind(this)}/>
                  </Form.Group>

                  <Form.Group controlId="password" className="form-group required">
                      <Form.Label className='control-label'>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Enter Password" 
                      onChange={this.handleChange.bind(this)} />
                  </Form.Group>

                  <Form.Group controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="Keep Me Logged In" />
                  </Form.Group>
                  
                  <center>
                    <Button variant="primary" type="submit" disabled={this.state.showButton}>Log In</Button><br/><br/>
                    {/* <Button variant="outline-primary" type="submit">Google</Button> */}
                    <GoogleLogin/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                    {/* <Button variant="outline-primary" type="submit">FaceBook</Button><br/><br/> */}
                    <FacebookLoginComponent/><br/><br/>
                    <NavLink to="/signUp">Not Registered Yet?</NavLink>
                  </center>
                </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(Login);