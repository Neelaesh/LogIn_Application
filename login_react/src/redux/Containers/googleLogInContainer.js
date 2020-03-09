import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

import * as googleLogInActions from '../Actions/googleLoginAction';
import GoogleLoginComponent from '../../Components/GoogleLogin/GoogleLoginComponent';


const mapStateToProps = (state) => {
    console.log("Login Container mapStateToProps-------------- ",state)
    return {
        user: state.logIn
    }
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     logInActions
// },dispatch);

export default connect(mapStateToProps, googleLogInActions)(GoogleLoginComponent);