import React, { Component } from 'react';
import { Header, Segment, Form, Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import Logo from '../images/tweeterlogo.png';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;
    return (
      <Container text>
      <Segment basic>
        <div align='center'>
          <img style={styles.logo} src={Logo} alt='Tweeter Logo' />
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
          <Container text>
            <label htmlFor='email'>Email</label>
            <input
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
            </Container>
          </Form.Field>
          
          <Form.Field>
          <Container text>
            <label htmlFor='password'>Password</label>
            <input
              required
              id='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
            </Container>
          </Form.Field>

          <Segment textAlign='center' basic>
          <Button type='submit'>
          <div class="ui animated fade button" tabindex="0">
            <div class="visible content">Login to Tweeter</div>
              <div class="hidden content">
                  Seriously?
               </div>
            </div>
            </Button>
          </Segment> 
          
          {/* <label htmlFor='password'>Or</label> */}
          <Segment textAlign='center' basic>
          <Button>
            <Link to='/register'>
            <div class="ui animated fade button" tabindex="0">
              <div class="visible content">Sign Up for Tweeter</div>
                <div class="hidden content">
                    It's no Twitter
                </div>
              </div>
              </Link>
            </Button>
          </Segment> 

        </Form>
        </div>
      </Segment>
      </Container>
    );
  }
}

const styles = {
      logo: {
          width: '300px'
      }
    }

export default connect()(Login);
