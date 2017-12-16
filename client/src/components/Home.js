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
        <Image centered={true} src={TweeterMain} />
        <Segment basic>
        <Header as='h1' textAlign='center'>The World of Twitts</Header>
          <Button>
            <Link to='/postform'>
            <div class="ui animated fade button" tabindex="0">
              <div class="visible content">Write Twitt</div>
                <div class="hidden content">
                    Wow Us
                </div>
              </div>
              </Link>
            </Button>
        <Table fixed>
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Twitt</Table.HeaderCell>
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
