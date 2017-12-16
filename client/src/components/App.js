import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Bio from './Bio';
import PostForm from './PostForm';
import EditPost from './EditPost';
import SinglePost from './SinglePost';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
 


class App extends Component {
  render() {
    return (
      <Segment>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <ProtectedRoute exact path='/' component={Home} />
            <ProtectedRoute exact path='/postform' component={PostForm} />
            <ProtectedRoute exact path='/posts/:id/' component={SinglePost} />
            <ProtectedRoute exact path='/posts/:id/edit' component={EditPost} />
            <ProtectedRoute exact path='/bio' component={Bio} />
           <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Segment>
    );
  }
}

export default App;
