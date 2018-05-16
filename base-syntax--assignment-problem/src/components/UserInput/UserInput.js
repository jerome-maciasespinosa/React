import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <input className="myInput" onChange={props.inputTextChanged} type="text" value={props.currText}/>
    )
}

export default UserInput;