import React, { Component } from 'react';
import { Form, Button, Label } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class PostForm extends Component {
  state = { post: { name: '', body: ''} };

  componentDidMount() {
    const match = this.props.match;
    if(match)
      axios.get(`/api/posts/${match.params.id}`)
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
    const { id, name, body } = this.state.post;
    baseUrl = id ? `${baseUrl}/${id}` : baseUrl;
    // strong params
    const params = { post: { name, body } }

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
          this.setState({ post: { name: '', body: '' }});
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

    );
  }
}

export default PostForm;