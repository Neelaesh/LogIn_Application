import { connect } from 'react-redux';

import Home from '../../Components/Home/Home';
import * as deleteActions from '../../redux/Actions/deleteUserAction';

const mapStateToProps = (state) => {
    console.log("Delete User mapStateToProps",state.logIn);
    return {
        user : state.logIn
    }
}

export default connect(mapStateToProps, deleteActions)(Home);