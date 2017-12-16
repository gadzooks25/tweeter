import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { Container, Header, Button } from 'semantic-ui-react';
=======
import { connect } from 'react-redux';
import { addComment } from '../actions/comments';
import avatar from '../images/joe.jpg'
import { Container, Header, Button, Comment, Form, Segment, Grid } from 'semantic-ui-react';
>>>>>>> architect
=======
import { addComment } from '../actions/comments';
import avatar from '../images/joe.jpg'
import { 
Container,
   Header, 
   Button,
   Comment, 
   Form, 
   Segment, 
   Grid,
   Icon } from 'semantic-ui-react';
>>>>>>> 1a1aa583a1a8750690ed24b76214d17676c67919

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
=======
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name } = this.state;
  //   const { id, dispatch } = this.props;
  //   const comment = { id, name };
  //   dispatch(addComment(comment))
  //   this.setState({ name: ''})
  // }

  handleChange = (e) => 
  this.setState({ name: e.target.value })

>>>>>>> 1a1aa583a1a8750690ed24b76214d17676c67919
  render(){
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
            {this.state.post.title}
             {this.state.post.content} 
             <br /> 
             <Icon name='delete' positive onClick={() => this.deletePost(id)}> </Icon>
             <Icon name='edit'> </Icon>
  
          <Comment.Group> 
              <Comment>
              <img src={avatar} alt='avatar'/>
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
<<<<<<< HEAD
export default SinglePost;
=======
export default connect()(SinglePost);
>>>>>>> architect
=======
export default SinglePost;
>>>>>>> 1a1aa583a1a8750690ed24b76214d17676c67919
