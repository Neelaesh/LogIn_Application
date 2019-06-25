const initialState = {
    email : '',
    username : '',
    password : '',
    confirmpassword : '',
    firstname : '',
    lastname : '',
    phonenumber : '',
    message : '',
    status : ''
}

export default function signUp(state=initialState, action){
    console.log(`Sign Up State ${JSON.stringify(state)} Sign Up Action ${JSON.stringify(action)}`)
    switch(action.type){
        case 'SIGN_UP' : 
            return {...state, ...action.signUp};
        default: 
            return state;
    }
}