import React, { Component } from 'react';
import { Form, Button, Label, Container } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { addPost, updatePost } from '../actions/posts';
import { connect } from 'react-redux';
import axios from 'axios';

class PostForm extends Component {
  state = {  title: '', content: '' };


  handleSubmit = (e) => {
    e.preventDefault();
    let post = { title: this.state.title, content: this.state.content }
    this.props.dispatch(addPost(post))
  }

  handleChange = (e) => {
    let { id, value } = e.target
    this.setState({ [id]: value })
  }


  render() {
    const { title, content } = this.state;

    return(
      <div>
      <Form onSubmit={this.handleSubmit}>
      <Container text>
        <Label>Post Title</Label>
        <Form.Input value={title} id='title' onChange={this.handleChange} />
        <Label>Content</Label>
      <Form.TextArea value={content} id='content' onChange={this.handleChange} />
        <Button as={Link} to={'/'}>Cancel</Button>
        <Button primary type='submit'> Save </Button>
        </Container>
      </Form>
      </div>
    );
  }
}

export default connect()(PostForm);
