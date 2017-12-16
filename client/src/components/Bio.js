import React, { Component } from 'react';
import { Segment, Header, Image, Card, Icon, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Berz from '../images/matthew.png';

const Bio = () => (
 <Container text centered="true">
   <Header> Super Awesome Bio </Header>
   <Card>
   <Image src={Berz} />
   <Card.Content>
     <Card.Header>
       Berz
     </Card.Header>
     <Card.Meta>
       <span className='date'>
         Joined in 2015
       </span>
     </Card.Meta>
     <Card.Description>
       Berz is a musician living in Nashville. Hairstyle by Jesus.
     </Card.Description>
   </Card.Content>
   <Card.Content extra>
     <a>
       <Icon name='user' />
       22 Friends
     </a>
   </Card.Content>
 </Card>
 </Container>
)

export default Bio;