import React, { Component } from 'react';
import {
  Header,
  Table,
  Segment,
  List,
  Button,
<<<<<<< HEAD
  Icon,
=======
>>>>>>> architect
  Container,
  Image
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TweeterMain from '../images/tweeterlogo.png';
<<<<<<< HEAD
import axios from 'axios';
=======
import TweeterLogo from '../images/tweeter2.png';
import {getPosts} from '../actions/posts'
import axios from 'axios';
import deletePost from '../reducers/posts';
>>>>>>> architect

class Home extends Component {

  componentDidMount() {
<<<<<<< HEAD
<<<<<<< HEAD
    axios.get(`/api/posts`)
    .then( res => {
      this.setState({ posts: res.data});
    })
    .catch( err => {
      console.log(err);
  });
=======
=======
    this.props.dispatch(getPosts())
>>>>>>> 1a1aa583a1a8750690ed24b76214d17676c67919
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
>>>>>>> architect
  }

  displayPost = () => {
    return this.props.posts.map( post => {
     return(
      <List>
<<<<<<< HEAD
          <Link to={`/posts/${post.id}`}>
          {post.name}
          </Link>
=======
        <Header as='h1' color='blue'>
          <Image size='mini' src={TweeterLogo} />
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <Button color='red' onClick={deletePost}>Delete</Button>
        </Header>
>>>>>>> architect
      </List>
     )
    })
  }

  render(){
<<<<<<< HEAD

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
=======
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
>>>>>>> architect
    )
  }
}

<<<<<<< HEAD

export default Home;
=======
const mapStateToProps = (state) => {
  return {posts: state.posts }
}

export default connect(mapStateToProps)(Home);
>>>>>>> 1a1aa583a1a8750690ed24b76214d17676c67919
