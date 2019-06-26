const initialState = {
    email : ''
}

export default function deleteAccountReducer(state = initialState, action) {
    console.log(`Delete Account State ${JSON.stringify(state)} Delete Account Action ${JSON.stringify(action)}`);
    switch(action.type){
        case DELETE_ACCOUNT :
            return {...state, ...action.user};
        default:
            return state;
    }
}