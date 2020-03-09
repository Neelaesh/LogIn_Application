import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as logOutActions from '../Actions/logOutAction';

const mapStateToProps = (state) => {
    console.log("Log Out Container mapStateToProps------------",state);
    return {
        user : state.logOut
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    logOutActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)