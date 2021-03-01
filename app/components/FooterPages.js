import React from 'react';
import { Button } from 'react-bootstrap';
import * as mdb from 'mdb-ui-kit';
import { Icon } from 'semantic-ui-react'


export default function Footer() {
  return (
    <div id="footer">

    <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=yael02115@gmail.com&su=I would like to offer you a new job&tf=1" target="_blank" ><Icon name='mail' /></a>
    <a href="//www.linkedin.com/in/yael-shpitzer-30b5bb203/" target="_blank"><Icon name='linkedin' /></a>
   <a href="//github.com/YaelShpitzer" target="_blank"> <Icon name='github' /> </a>
<div id="made_by">@ Made by Yael Shpitzer All rights reserved 2021</div>
    </div>
  );
}