const initialState = {
    username : '',
    email : '',
    firstname : '',
    lastname : '',
    googleAccountLinked : false,
    facebookAccountLinked :false
}

export default function facebookLogIn(state= initialState, action){
    console.log(`Facebook LogIn State ${JSON.stringify(state)} Facebook LogIn Action ${JSON.stringify(action)}`)
    switch(action.type){
        case 'LOG_IN' :
            return {...state, ...action.facebookLogIn}
        default :
            return state;
    }
}