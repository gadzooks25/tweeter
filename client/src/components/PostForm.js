import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class PostForm extends Component {
  state = { post: { title: '', content: ''} };

  componentDidMount() {
    const match = this.props.match;
    if(match)
      axios.get(`/api/${match.params.id}`)
        .then( res => {
          this.setState({ post: res.data });
        })
        .catch( err => {
          console.log(err);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let baseUrl = '/api/posts';
    const { id, title, content } = this.state.post;
    baseUrl = id ? `${baseUrl}/${id}` : baseUrl;
    // strong params
    const params = { post: { title, content } }

    if(id)
      axios.put(baseUrl, params)
        .then(res => {
          this.props.history.push(`/posts/${id}`);
          
        })
        .catch( err => {
          console.log(err);
      });
    else
      axios.post(baseUrl, params)
        .then(res => {
          this.setState({ post: { title: '', content: '' }});
          this.props.addPost(res.data);
          
        })
        .catch( err => {
          console.log(err);
      })
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ post: {...this.state.post, [id]: value } })
  }


  render() {
    const { title, content } = this.state.post;

    return(
      <div> 
      <Form onSubmit={this.handleSubmit}>
        <Label>Post Title</Label>
        <Form.Input value={title} id='title' onChange={this.handleChange} />
        <Label>Content</Label>
      <Form.TextArea value={content} id='content' onChange={this.handleChange} />
        <Button as={Link} to={'/'}>Cancel</Button> 
        <Button primary type='submit'> Save </Button>         
      </Form>
      </div> 

    );
  }
}

export default PostForm;