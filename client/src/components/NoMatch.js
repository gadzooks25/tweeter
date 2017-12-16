import React, { Component } from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/skerpie.png';

class NoMatch extends Component {
  render() {
    return (
      <Container text>
      
      <Header>
        <div align='center'>
          <img style={styles.logo} src={Logo} alt='Skerpie' />
        </div>
      </Header>

      Have you ever needed a Sharpie, but could only find a Skerpie?
      Sure, they look similar, but are they? Same shape, same colored 
      cap, same felt tip even, but remove that cap and you'll find a dried
      out shell of what a marker should be. Cheap knock offs are everywhere...like 
      Tweeter...almost like Twitter, but with out all the awesomeness. To be 
      fair, Tweeter was created by four students in the large conference room at 
      Church and State...it's a small miracle that you even found this page.
      <br />
      <br />
      Fact: Twitter raised $100,000 at a valuation of $220,000 in July 2007...Tweeter actually cost us money. 
      <br />
      <br />
      Give us 100k, a team of developers, and more time than just a few hours (looking at you Will and Nhi), and
      and we may actually give you a cheap knock off site that works. Until then we're just
      hoping to win first place today and leave with a fabulous prize.
      <br />
      <br />
      In case it wasn't clear, this is our 404 page. You are either lost, or looking really hard to
      get to the real thing. Let us help you. Click<Link to='/'> Home </Link> to return
      to Tweeter, or click <a href='http://www.twitter.com'> Twitter </a>to get the real deal.
      </Container>
      
    );
  }
}

const styles = {
  logo: {
      width: '300px'
  }
}

export default NoMatch;
