import { connect } from 'react-redux';

import * as signUpActions from '../Actions/signUpAction';
import SignUp from '../../Components/SignUp/SignUp';

const mapStateToProps = (state) => {
    console.log("SignUp Container mapStateToProps ",state)
    return {
        newUser : state.signUp
    }
}

export default connect(mapStateToProps, signUpActions)(SignUp);