import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>{props.username}</p>
            <p style={{color: 'brown'}}>paraph 2</p>
        </div>
    )
}

export default UserOutput;