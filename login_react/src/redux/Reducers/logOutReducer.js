const initialState = {
    email : ''
}

export default function logOut(state=initialState, action){
    console.log(`LogOut State ${JSON.stringify(state)} LogOut Action ${JSON.stringify(action)}`)
    switch(action.type){
        case 'LOG_OUT' :
            return {...state, ...action.user}
        default:
            return state;
    }
}