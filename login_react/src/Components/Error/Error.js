import React from 'react';
import { withRouter } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Error extends React.Component {

    componentDidMount(){
        console.log("Error ",this.props.location.state);
    }

    navigateToLogInPage = () => {
        this.props.history.push('/');
    }

    render(){
        return(
                <div>
                    <center>
                        <h2>Error</h2>
                        <h3>{this.props.location.state.message}</h3>
                        <br/><br/>
                        <Container>
                        <Row>
                            <Col xs></Col>
                            <Col xs={{ order: 12 }}></Col>
                            <Col xs={{ order: 1 }}>
                                <Button variant="primary" type="submit" 
                                onClick={this.navigateToLogInPage}>Log In Again</Button><br/><br/>
                            </Col>
                        </Row>
                        </Container>
                    </center>
                </div>
            
        )
    }
} 

export default withRouter(Error);