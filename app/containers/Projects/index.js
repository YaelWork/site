import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Card, Icon, Image } from 'semantic-ui-react'
import messages from './messages';
import contact from '../../images/contact.jpg'
import  ticktack  from "../../images/ticktack.jpg";
import game2 from '../../images/Game2.jpg'
import './style.scss';
export function Projects() {
  return (
    <div id="projects">
      <h1>My projects</h1>
<Card className="cards">
  
    <Image src={contact} wrapped ui={false} id="contact"/>
    <Card.Content>
      <Card.Header>List Contacts</Card.Header>
      <Card.Description>
        <b>Main features:</b>
        <li>Written in React, Node.js </li>
        <li id="newline"> at a high level.</li>
        <li>Ensuring clean code.</li>
        <li>Using in Bootstrap.</li>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <a href="https://github.com/YaelShpitzer/ListContacts" target="_blank" className="gitbuttons">GITHUB</a>
    </Card.Content>
  </Card>


  <Card className="cards" id="ticktack">
  
    <Image src={ticktack} wrapped ui={false} />
    <Card.Content>
      <Card.Header>TickTack</Card.Header>
      <Card.Description>
        <b>Main features:</b>
        <li>Written in React and Node.js.</li>
        <li>Interface with Google API</li>
        <li>Complex logic and algorithm</li>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    <a href="https://github.com/YaelShpitzer/TickTackProject" target="_blank" className="gitbuttons">GITHUB</a>
    </Card.Content>
  </Card>



  <Card className="cards" id="game">
  <Image src={game2}  className='games'/>
 
  <Card.Content>
    <Card.Header>Games</Card.Header>

    <Card.Description>
  <b>  Main features:</b>
      <li>Written in Html, CSS, JS.</li>
      <li>Solution for special cases.</li>
      <li>Emphasis on user experience.</li>
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
  <a href="https://github.com/YaelShpitzer/Games"  target="_blank" className="gitbuttons">GITHUB</a>
  </Card.Content>
</Card>

    </div>
  );
}


export default Projects;
