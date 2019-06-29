import React from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import PasswordStrengthMeter from '../Password/PasswordStrengthMeter';
import SignUpModal from '../Modal/SignUpModal';

class SignUp extends React.Component {

    constructor(){
        super();
        this.state = {
            fields : {
                password : ''
            },
            errors : {},
            showModal : false,
            modalMessage : null
        }
    }

    componentDidMount(){
        console.log("SignUp Props ",this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log("Sign Up Will Recieve Props ",nextProps.newUser);
        if(nextProps.newUser.message){
            this.setState({
                showModal : true,
                modalMessage : nextProps.newUser.message
            });
        }
    }

    goBack = () => {
        this.props.history.push('/');
    }

    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({
            fields
        }, ()=> {
            // Confirm Password
            if(fields['confirmpassword']){
                if(fields['password']){
                    if(fields['confirmpassword'] !== fields['password']){
                        this.setState({
                            errors : {
                                'confirmpassword' : "Confirm Password And Password Does Not Match"
                            }
                        });
                    }
                    else{
                        this.setState({
                            errors : {
                                'confirmpassword' : ""
                            }
                        });
                    }
                }
            }
        });
    }

    handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        // Email
        if(!fields['email']){
            formIsValid = false;
            errors['email'] = "Email Cannot Be Empty";
        }
        if(typeof fields['email'] !== 'undefined'){
            if(!fields['email'].match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                formIsValid = false;
                errors['email'] = "Email Address Not Valid";
            }
        }

        // Username
        if(!fields['username']){
            formIsValid = false;
            errors['username'] = "Username Cannot Be Empty";
        }
        if(typeof fields['username'] !== 'undefined'){
            if(!fields['username'].match(/^[a-zA-Z ]+$/)){
                formIsValid = false;
                errors['username'] = "Username Not Valid";
            }
        }

        // Password
        if(!fields['password']){
            formIsValid = false;
            errors['password'] = "Password Cannot Be Empty";
        }

        // Confirm Password
        if(!fields['confirmpassword']){
            formIsValid = false;
            errors['confirmpassword'] = "Confirm Password Cannot Be Empty";
        }

        // First Name
        if(!fields['firstname']){
            formIsValid = false;
            errors['firstname'] = "First Name Cannot Be Empty";
        }
        if(typeof fields['firstname'] !== 'undefined'){
            if(!fields['firstname'].match(/^[a-zA-Z ]+$/)){
                formIsValid = false;
                errors['firstname'] = "First Name Not Valid";
            }
        }

        // Last Name
        if(!fields['lastname']){
            formIsValid = false;
            errors['lastname'] = "Last Name Cannot Be Empty";
        }
        if(typeof fields['lastname'] !== 'undefined'){
            if(!fields['lastname'].match(/^[a-zA-Z ]+$/)){
                formIsValid = false;
                errors['lastname'] = "Last Name Not Valid";
            }
        }

        // Phone Number
        if(!fields['phonenumber']){
            formIsValid = false;
            errors['phonenumber'] = "Phone Number Cannot Be Empty";
        }
        if(typeof fields['phonenumber'] !== 'undefined'){
            if(!fields['phonenumber'].match(/^[6-9]\d{9}$/)){
                formIsValid = false;
                errors['phonenumber'] = "Valid Phone Number Starts With 6,7,8,9";
            }
        }

        this.setState({
            errors
        });
        return formIsValid;
    }

    SignUp = (event) => {
        event.preventDefault();
        console.log("SignUp ",this.state.fields);
        if(this.handleValidation()){
            this.props.signUp(this.state.fields, this.props.history);
        }
        else{
            alert("Form has Errors");
        }
    }

    handleClose = (show) => {
        this.setState({
            showModal : show
        }, () => {
            this.props.history.push('/');
        });
    }

    render(){
        return(
            <div>
                <center><h2>Sign Up</h2></center>
                <br/>
                <Container>
                    <Row>
                        <Col xs></Col>
                        <Col xs={{ order: 12 }}></Col>
                        <Col xs={{ order: 1 }}>
                            <Form onSubmit={this.SignUp}>
                                <Form.Group controlId="email" className="form-group required">
                                    <Form.Label className='control-label'>Email Address</Form.Label>
                                    <Form.Control type="text" name="email" placeholder="Enter Email" 
                                    onChange={ (e) => this.handleChange("email", e)}/>
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                    <span className="requiredColor">{this.state.errors['email']}</span>
                                </Form.Group>
                                
                                <Form.Group controlId="username" className="form-group required">
                                    <Form.Label className='control-label'>Username</Form.Label>
                                    <Form.Control type="text" name="username" placeholder="Enter Username" 
                                    onChange={ (e) => this.handleChange("username", e)}/>
                                    <span className="requiredColor">{this.state.errors['username']}</span>
                                </Form.Group>

                                <Form.Group controlId="password" className="form-group required">
                                    <Form.Label className='control-label'>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Enter Password" 
                                    onChange={ (e) => this.handleChange("password", e)}/>
                                    <PasswordStrengthMeter password={this.state.fields.password}></PasswordStrengthMeter>
                                    <span className="requiredColor">{this.state.errors['password']}</span>
                                </Form.Group>

                                <Form.Group controlId="confirmpassword" className="form-group required">
                                    <Form.Label className='control-label'>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="confirmpassword" placeholder="Enter Confirm Password" 
                                    onChange={ (e) => this.handleChange("confirmpassword", e)}/>
                                    <span className="requiredColor">{this.state.errors['confirmpassword']}</span>
                                </Form.Group>

                                <Form.Group controlId="firstname" className="form-group required">
                                    <Form.Label className='control-label'>First Name</Form.Label>
                                    <Form.Control type="text" name="firstname" placeholder="Enter First Name" 
                                    onChange={ (e) => this.handleChange("firstname", e)}/>
                                    <span className="requiredColor">{this.state.errors['firstname']}</span>
                                </Form.Group>

                                <Form.Group controlId="lastname" className="form-group required">
                                    <Form.Label className='control-label'>Last Name</Form.Label>
                                    <Form.Control type="text" name="lastname" placeholder="Enter Last Name" 
                                    onChange={ (e) => this.handleChange("lastname", e)}/>
                                    <span className="requiredColor">{this.state.errors['lastname']}</span>
                                </Form.Group>

                                <Form.Group controlId="phonenumber" className="form-group required">
                                    <Form.Label className='control-label'>Phone Number</Form.Label>
                                    <Form.Control type="text" name="phonenumber" placeholder="Enter Phone Number" 
                                    onChange={ (e) => this.handleChange("phonenumber", e)} maxLength="10"/>
                                    <span className="requiredColor">{this.state.errors['phonenumber']}</span>
                                </Form.Group>
                                
                                <center>
                                <Button variant="primary" type="submit">Submit</Button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Button variant="danger" onClick={this.goBack}>Log In</Button>
                                </center>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                {
                    this.state.showModal && 
                    <SignUpModal show={this.state.showModal} modalMessage={this.state.modalMessage}
                    handleModalClose={this.handleClose}></SignUpModal>
                }
            </div>
        )
    }
}

export default withRouter(SignUp);