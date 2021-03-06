import React, { Component } from 'react';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';


import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';

import './Blog.css';
import asyncComponent from './../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
   
    state = {
        auth: true
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{color: 'orangered', textDecoration: 'underline'}}>Home</NavLink></li>
                            <li><NavLink to={{pathname: '/new-post', hash: '#submit', search: '?quick-submit=true'}}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Route path="/" render={() => <h1>Home</h1>} /> */}
                <Switch>
                   {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found</h1>} />
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>
                
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;