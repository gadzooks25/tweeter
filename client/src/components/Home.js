import React, { Component } from 'react';
import {
  Header,
  Table,
  Segment,
  List,
  Button,
  Container,
  Image
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TweeterMain from '../images/tweeterlogo.png';
import TweeterLogo from '../images/tweeter2.png';
import axios from 'axios';
import deletePost from '../reducers/posts';

class Home extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
    .then( res => {
      this.setState({ posts: res.data })
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

  displayPost = () => {
    return this.state.posts.map( post => {
     return(
      <List>
        <Header as='h1' color='blue'>
          <Image size='mini' src={TweeterLogo} />
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <Button color='red' onClick={deletePost}>Delete</Button>
        </Header>
      </List>
     )
    })
  }

  render(){
      return(
        <Container text>
          <Image centered={true} src={TweeterMain} />
            <Header as='h1' textAlign='center'>Your Feed</Header>
            <Link to={'/postform'}>
            <Button primary> Write Twitt </Button>
            </Link>
            <Table fixed>
              <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Recent Twitts</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
              {this.displayPost()}
            </Table>
        </Container>
    )
  }
}

export default Home;
