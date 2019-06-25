const initialState = {
    username : '',
    password : ''
}

export default function logIn(state = initialState, action){
    console.log(`LogIn State ${JSON.stringify(state)} LogIn Action ${JSON.stringify(action)}`)
    switch(action.type){
        case 'LOG_IN' :
            return {...state, ...action.user}
        default:
            return state;
    }
}