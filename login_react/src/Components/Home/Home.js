import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import DeleteAccountModal from '../Modal/DeleteAccountModal';

class Home extends React.Component {

    constructor(){
        super();
        this.state = {
            showModal : false,
            modalMessage : null,
            deleteStatus : false
        };
    }

    componentDidMount(){
        console.log("Home Did Mount ",this.props);
    }

    deleteAccount = () => {
        console.log("Delete User Email ",this.props.user.email);
        console.log("Home Props ",this.props);
        this.setState({
            showModal : true,
            modalMessage : 'Are you sure you want to Delete the Account?'
        });
    }

    handleClose = (show, deleteStatus) => {
        console.log(`Pop Up Status ${show} ${deleteStatus} `);
        this.setState({
            showModal : show,
            deleteStatus
        }, ()=> {
            if(this.state.deleteStatus){
                let user = {
                    email : this.props.user.email
                }
                this.props.deleteAccount(user, this.props.history);
            }
        });
        
    }

    render(){
        return(
            <div>
                <center>
                    <h2>My Profile</h2><br/><br/>
                    <Button variant="outline-info">Link  Account To Google</Button><br/><br/>
                    <Button variant="outline-info">Link Account To FaceBook</Button><br/><br/>
                    <Button variant="outline-danger" onClick={this.deleteAccount}>Delete Account</Button>
                    {
                        this.state.showModal &&
                        <DeleteAccountModal show={this.state.showModal} modalMessage={this.state.modalMessage}
                        handleModalClose={this.handleClose}></DeleteAccountModal>
                    }
                </center>
            </div>
        )
    }

}

export default withRouter(Home);

// const mapStateToProps = (state) => {
//     console.log("Home mapStateToProps",state.logIn);
//     return {
//         user : state.logIn
//     }
// }

// export default connect(mapStateToProps, deleteActions)(withRouter(Home));