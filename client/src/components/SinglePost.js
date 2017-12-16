import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { Container, Header, Button } from 'semantic-ui-react';
=======
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';
import avatar from '../images/joe.jpg'
import { Container, Header, Button, Comment, Form, Segment, Grid } from 'semantic-ui-react';
>>>>>>> architect

class SinglePost extends Component {
  state = { post: {} }; 

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/posts/${id}`)
      .then( res => {
        this.setState({ post: res.data, loaded: true });
      })
      .catch( err => {
        console.log(err);
    });
  }

  deletePost = () => {
    window.confirm("Delete Post?")
    axios.delete(`/api/posts/${this.state.post.id}`)
      .then( res => {
<<<<<<< HEAD
        this.props.history.push('/Posts')
=======
        this.props.history.push('/')
>>>>>>> architect
      })
      .catch( err => {
        console.log(err)
      });
  }

<<<<<<< HEAD
=======
  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { id, dispatch } = this.props;
    const comment = { id, name };
    dispatch(addComment(comment))
    this.setState({ name: ''})
  }

  handleChange = (e) => 
  this.setState({ name: e.target.value })
>>>>>>> architect
  render(){
    // const { post } = this.state.post
    const { id, deletePost } = this.state.post
    return (
<<<<<<< HEAD
      <Container> 
      <Header> {this.state.post.name} </Header> 
      {this.state.post.body}
      <Button onClick={() => this.deletePost(id)}> Delete </Button> 
      <Button> Edit </Button> 
=======
      <Container text> 
          <Segment color='red'>
             Here is a post
             <br /> 
          <Button onClick={() => this.deletePost(id)}> Delete </Button> 
          <Button> Edit </Button>
          <Comment.Group> 
              <Comment>
              <img src={avatar} alt='avatar' />
              <Comment.Content>
                <Comment.Author as='a'>Joe Henderson</Comment.Author>
                <Comment.Metadata>
                  <div>5 days ago</div>
                </Comment.Metadata>
                <Comment.Text>
                  Dude, this is awesome. Thanks so much
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
            <Form reply>
              <Form.TextArea />
              <Button content='Add Reply' labelPosition='left' icon='edit' primary type='submit' />
            </Form>
          </Comment.Group>
          </Segment>
>>>>>>> architect
      </Container> 
    )
  } 

}

<<<<<<< HEAD
export default SinglePost;
=======
export default connect()(SinglePost);
>>>>>>> architect
