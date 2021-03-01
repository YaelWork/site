import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Aa from './component/Carousel'
// import Carousel from 'react-bootstrap/Carousel'
import udemy from '../../images/udemy-logo.94c5f26e.png'
import card1 from "../../images/Card.jpg";
import card2 from "../../images/card2.jpg"
import './style.scss';

export default function About() {
  return (
    <div>
      <h1>About me - Education</h1>
      <Carousel>
        <>
          <img src={card1} id="card1" />
          <p className="legend">Legend 2</p>
        </>
        <>
          <img src={card2} id="card2"/>
          <p className="legend">Legend 2</p>
        </>
        <>
          <img src={udemy} id="card3" />
          <p className="legend">Legend 1</p>
        </>


      </Carousel>
      <h3>Skills</h3>
      <div id="skills">
        <button>C</button>
        <button>C#</button>
        <button>JavaScript</button>
        <button>CSS</button>
        <button>Html5</button>
        <button>Java</button>
        <button>React Aux</button>
        <button>Node.js</button>
        <button>Angular8</button>
        <button>JQuery</button>
        <button>Assembler</button>
        <button>SQL</button>
      </div>
    </div>
  );
}

