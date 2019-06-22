export default function signIn(state={}, action){
    console.log(`Sign In State ${JSON.stringify(state)} Sign In Action ${JSON.stringify(action)}`)
    switch(action.type){
        case 'SIGN_UP' : 
            return {...state};
        default: 
            return state;
    }
}