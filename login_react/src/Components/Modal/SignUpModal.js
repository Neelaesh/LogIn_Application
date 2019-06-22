import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Modal , Button } from 'react-bootstrap';

class SignUpModel extends React.Component {
    
    handleClose = () => {
        let show = false;
        this.props.handleModalClose(show);
    }

    render(){
        return(
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

SignUpModel.propTypes = {
    handleModalClose : PropTypes.func.isRequired,
    show : PropTypes.bool.isRequired,
    modalMessage : PropTypes.string.isRequired
}

export default withRouter(SignUpModel);