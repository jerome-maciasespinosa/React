import React from 'react';
import User from '../../components/User';

const authIndexPage = () => (
    <div>
        <h1>The Auth index page</h1>
        <User name="jerome" age={29}/>
    </div>
);

export default authIndexPage;