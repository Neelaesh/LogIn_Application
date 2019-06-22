import React from 'react';

import { strengthColor, strengthIndicator } from './strength-password';
import Form from 'react-bootstrap/Form';


export default function PasswordInput(props){

    const strength = strengthIndicator(props.value);
    const color = strengthColor(strength);

    const colorStrength = passwordStrength(color);

    function passwordStrength(color){
        if (color == '#ced4da')
        return "";
        if (color == '#red')
        return "Password Strength : Bad";
        if (color == 'orange')
        return "Password Strength : Poor";
        if (color == 'lightgreen')
        return "Password Strength : Fair Enough";
        if (color == 'green')
        return "Password Strength : Good";
    }

    return(
        <span>
            <Form.Control type="password" name="password" value={props.value}
            className='password-input'
            placeholder={props.placeholder}
            onChange={props.handleChanges}
            style={{
                borderColor : color
            }}/>
            <span>{colorStrength}</span>
        </span>
        
    )
}