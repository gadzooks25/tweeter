import React, { Component } from 'react';
import {
  Header,
  Table,
  Segment,
  List,
  Button,
  Icon,
  Container,
  Image
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import TweeterMain from '../images/tweeterlogo.png';
import axios from 'axios';

class Home extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get(`/api/posts`)
    .then( res => {
      this.setState({ posts: res.data});
    })
    .catch( err => {
      console.log(err);
  });
  }

  displayPost = () => {
    return this.state.posts.map( post => {
     return(
      <List>
        <Link to={`/posts/${post.id}`}>
        {post.name}
        </Link>
      </List>
     )
    })
  }

  render(){

      return(
        <Container text>
          <Segment basic>
          <Image src={TweeterMain} centered />
          <Header as='h1' textAlign='center'>Twitts</Header>
          <Link to={`/posts/postform`}>
          <Button primary> Add Post </Button>
          </Link>
          <Table fixed>
            <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Posts</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            {this.displayPost()}
          </Table>
        </Segment>
      </Container>
    )
  }
}


export default Home;
