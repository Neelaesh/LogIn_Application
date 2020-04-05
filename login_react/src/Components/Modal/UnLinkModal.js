import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Modal , Button } from 'react-bootstrap';

class UnLinkGoogleModal extends React.Component {
    
    handleClose = () => {
        let show = false;
        this.props.handleModalClose(show);
    }

    unLink = () => {
        let unLinkStatus = true;
        let show = false;
        this.props.handleModalClose(show, unLinkStatus);
    }

    render(){
        return(
            <Modal show={this.props.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.unLink}>Yes</Button>
                    <Button variant="secondary" onClick={this.handleClose}>No</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

UnLinkGoogleModal.propTypes = {
    handleModalClose : PropTypes.func.isRequired,
    show : PropTypes.bool.isRequired,
    modalTitle : PropTypes.string.isRequired,
    modalMessage : PropTypes.string.isRequired
}

export default withRouter(UnLinkGoogleModal);