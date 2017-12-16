import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
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
        this.props.history.push('/')
      })
      .catch( err => {
        console.log(err)
      });
  }

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

  render(){
    const { id, deletePost } = this.state.post
    return (
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
      </Container> 
    )
  } 

}

export default SinglePost;