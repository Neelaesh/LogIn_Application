const initialState = {
    username : '',
    email : '',
    firstname : '',
    lastname : '',
    googleAccountLinked : false,
    facebookAccountLinked :false
}

export default function logIn(state = initialState, action){
    console.log(`Google LogIn State ${JSON.stringify(state)} Google LogIn Action ${JSON.stringify(action)}`)
    switch(action.type){
        case 'LOG_IN' :
            console.log("Action ",action);
            return {...state, ...action.logIn}
        default:
            return state;
    }
}