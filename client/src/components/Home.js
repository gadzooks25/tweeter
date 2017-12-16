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
import { connect } from 'react-redux';
import TweeterMain from '../images/tweeterlogo.png';
import TweeterLogo from '../images/tweeter2.png';
import {getPosts} from '../actions/posts'
import axios from 'axios';
import deletePost from '../reducers/posts';

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(getPosts())
    axios.get('/api/posts')
    .then( res => {
      this.setState({ posts: res.data })
    })
    .catch( err => {
      console.log(err);
    });
  }

  deletePost = (id) => {
    const { posts } = this.state;
    this.setState({ posts: posts.filter( p => p.id !== id) })
  }

  displayPost = () => {
    return this.props.posts.map( post => {
     return(
      <List>
        <Header as='h1' color='blue'>
          <Image size='mini' src={TweeterLogo} />
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <Button color='red' onClick={ () => this.deletePost(post.id)}>Delete</Button>
        </Header>
      </List>
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

const mapStateToProps = (state) => {
  return {posts: state.posts }
}

export default connect(mapStateToProps)(Home);
