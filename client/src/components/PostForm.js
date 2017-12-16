import React, { Component } from 'react';
<<<<<<< HEAD
import { Form, Button, Label } from 'semantic-ui-react';
=======
import { Form, Button, Label, Container } from 'semantic-ui-react';
>>>>>>> architect
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class PostForm extends Component {
<<<<<<< HEAD
  state = { post: { name: '', body: ''} };
=======
  state = { post: { title: '', content: ''} };
>>>>>>> architect

  componentDidMount() {
    const match = this.props.match;
    if(match)
<<<<<<< HEAD
      axios.get(`/api/posts/${match.params.id}`)
=======
      axios.get(`/api/${match.params.id}`)
>>>>>>> architect
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
<<<<<<< HEAD
    const { id, name, body } = this.state.post;
    baseUrl = id ? `${baseUrl}/${id}` : baseUrl;
    // strong params
    const params = { post: { name, body } }
=======
    const { id, title, content } = this.state.post;
    baseUrl = id ? `${baseUrl}/${id}` : baseUrl;
    // strong params
    const params = { post: { title, content } }
>>>>>>> architect

    if(id)
      axios.put(baseUrl, params)
        .then(res => {
          this.props.history.push(`/posts/${id}`);
<<<<<<< HEAD
          
=======

>>>>>>> architect
        })
        .catch( err => {
          console.log(err);
      });
    else
      axios.post(baseUrl, params)
        .then(res => {
<<<<<<< HEAD
          this.setState({ post: { name: '', body: '' }});
          this.props.addPost(res.data);
          
=======
          this.setState({ post: { title: '', content: '' }});
          this.props.addPost(res.data);

>>>>>>> architect
        })
        .catch( err => {
          console.log(err);
      })
<<<<<<< HEAD
     

=======
>>>>>>> architect
  }

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ post: {...this.state.post, [id]: value } })
  }


<<<<<<< HEAD

  // saveButton = () => {
  //   debugger
  //     return(
  //       <div> 
  //     {/* <Button primary type='submit'> Save </Button>  */}
  //     <Redirect to={'/posts'}/> 
  //     </div> 
  //   )
  // }

  render() {
    const { name, body } = this.state.post;

    return(
      <div> 
      <Form onSubmit={this.handleSubmit}>
        <Label>Post Title</Label>
        <Form.Input value={name} id='name' onChange={this.handleChange} />
        <Label>Content</Label>
      <Form.TextArea value={body} id='body' onChange={this.handleChange} />
        <Button as={Link} to={`/posts`}>Cancel</Button> 
        <Button primary type='submit'> Save </Button>         
      </Form>
      <Redirect to={'/posts'}/> 
      </div> 
=======
  render() {
    const { title, content } = this.state.post;

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
>>>>>>> architect

    );
  }
}

<<<<<<< HEAD
export default PostForm;
=======
export default PostForm;
>>>>>>> architect
