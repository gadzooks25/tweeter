import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import PostForm from './PostForm';
import SinglePost from './SinglePost';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import PostForm from './PostForm';
import SinglePost from './SinglePost';
=======
import { Segment } from 'semantic-ui-react';


>>>>>>> architect
class App extends Component {
  render() {
    return (
      <Segment>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
<<<<<<< HEAD
            <ProtectedRoute exact path='/posts/postform' component={PostForm} />
            <ProtectedRoute exact path='/posts/:id/' component={SinglePost} />
      
=======
            <ProtectedRoute exact path='/postform' component={PostForm} />
            <ProtectedRoute exact path='/posts/:id/' component={SinglePost} />
>>>>>>> architect
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
