import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FooterPages from '../../components/FooterPages'
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import 'style.scss';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import About from '../About/index'
import Projects from '../Projects/index'
import './style.scss';
export default function App() {
  return (
    <div className="app">
      <Helmet > <title >Yael Shpitzer</title></Helmet>  
      <Header id="header"/>
      <div className="pages">
      
          <Switch>
        <Route path="/about" component={About}/>
        <Route path="/projects" component={Projects}/>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch> 
      </div>
     
       <FooterPages/>
    </div>
  );
}
