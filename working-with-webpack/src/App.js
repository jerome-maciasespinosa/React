import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Users from './containers/Users';
import Pizza from './containers/Pizza';

import asyncComponent from './hoc/asyncComponent';


const asyncPizza = asyncComponent(() => {
    return import('./containers/Pizza')
})

class App extends Component {
    render() {
        return(
            <div>
                <div>
                    <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Switch>
                        <Route path="/" exact component={Users}>Users</Route>
                        <Route path="/pizza" component={asyncPizza}>Pizza</Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;