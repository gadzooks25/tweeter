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
import { connect } from 'react-redux';
import TweeterMain from '../images/tweeterlogo.png';
import { getPosts } from '../actions/posts'
import axios from 'axios';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  displayPost = () => {
    return this.props.posts.map( post => {
     return(
      <List> 
          <Link to={`/posts/${post.id}`}> 
          {post.title}
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
            <Table.HeaderCell>Title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
          {this.displayPost()}
        </Table>   
        <Link to={'/postform'}> 
        <Button > Add Post </Button> 
        </Link> 
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts }
}

export default connect(mapStateToProps)(Home);
