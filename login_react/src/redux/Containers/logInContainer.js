import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as logInActions from '../Actions/logInAction';
import Login from '../../Components/LogIn/Login';


const mapStateToProps = (state) => {
    console.log("Login Container mapStateToProps-------------- ",state)
    return {
        user: state.logIn
    }
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     logInActions
// },dispatch);

export default connect(mapStateToProps, logInActions)(Login);