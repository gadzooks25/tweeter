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
       <Segment>
         <Link to={`/posts/${post.id}`}>
         {post.name}
         </Link>
         <List>
            <Link to={`/posts/${post.id}`}>
            {post.title}
            </Link>
        </List>
      </Segment>
     )
    })
  }

  render(){
      return(
        <Container text>
        <Image centered src={TweeterMain} />
        <Segment basic>
        <Header as='h1' textAlign='center'>Twitts</Header>
        <Link to={'/postform'}>
        <Button primary centered> Add Post </Button>
        </Link>
        <Table fixed>
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
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
