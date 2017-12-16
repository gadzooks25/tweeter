import React, { Component } from 'react';
import { Header, Table, Segment, List, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
        <Segment basic>
        <Header as='h1'> Twitts  </Header>
        <Table fixed> 
          <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          {this.displayPost()}
        </Table>   
        <Link to={`/posts/postform`}> 
        <Button > Add Post </Button> 
        </Link> 
      </Segment>
    )
  }
}


export default Home;



