import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Modal , Button } from 'react-bootstrap';

class DeleteUserModal extends React.Component {
    
    handleClose = () => {
        let show = false;
        this.props.handleModalClose(show);
    }

    deleteUser = () => {
        console.log("Delete Account ");
        let deleteStatus = true;
        let show = false;
        this.props.handleModalClose(show, deleteStatus);
    }

    render(){
        return(
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.deleteUser}>Yes</Button>
                    <Button variant="secondary" onClick={this.handleClose}>No</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

DeleteUserModal.propTypes = {
    handleModalClose : PropTypes.func.isRequired,
    show : PropTypes.bool.isRequired,
    modalMessage : PropTypes.string.isRequired
}

export default withRouter(DeleteUserModal);