import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import * as facebookLoginActions from '../Actions/facebookLoginAction';
import FacebookLoginComponent from '../../Components/FacebookLogin/FacebookLoginComponent';

const mapStateToProps = (state) => {
    console.log("Login Container mapStateToProps-------------- ",state)
    return {
        user : state.logIn
    }
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     facebookLoginActions
// }, dispatch)

export default connect(mapStateToProps, facebookLoginActions)(FacebookLoginComponent);