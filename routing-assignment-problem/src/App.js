import React, { Component } from 'react';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Aux from './hoc/_Aux';

import Course from './containers/Course/Course';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Home from './containers/Home/Home';
import Navigation from './components/Navigation/Navigation';

class App extends Component {

  componentDidUpdate() {
    check();
  }
  check = () => {
    console.log(this.props);
  }

  render () {

    return (
      <div className="App">
        <BrowserRouter>
          <Aux>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home}  />
              <Route path="/users" component={Users} />   
              <Route path="/courses" component={Courses} />  
              <Route path="/all-courses" render={() => (<Redirect to="/courses" />)}  />
              <Route render={() => <div>404 - Not Found</div>}  />
            </Switch>
          </Aux>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
