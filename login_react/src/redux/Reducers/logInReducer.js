export default function logIn(state = {}, action){
    console.log(`LogIn State ${JSON.stringify(state)} LogIn Action ${JSON.stringify(action)}`)
    switch(action.type){
        case 'LOG_IN' :
            return {...state, ...action.user}
        default:
            return state;
    }
}