import 'style.scss';
import React,{useState,useEffect} from 'react';
import Contact from '../Contact/index';
import {messages} from './messages';
import { Icon } from 'semantic-ui-react'
import './style.scss';
export default function HomePage() {
  const [ClickContact, setClickContact] = useState();
  useEffect(() => {
    setClickContact(false)
  }, [])
  return (
 <div className="home">
   <div id="clean" >
   <div id="text">
     
       <h1>{messages.firstitle}</h1>
      <h2>{messages.secondtitle}</h2>
      <a href={"https://www.docdroid.net/1sWpuYY/yaelcv-docx"} target="_blank" className="resum">Resume</a>
    </div></div>
  
    <button className="btnPack" onClick={()=>setClickContact(true)}> <span id="contactme">Contact</span>  <Icon name='angle double left'/></button>
    {ClickContact? <Contact />:null}
    <Icon id="close" name='angle double right' onClick={()=>setClickContact(false)}/>
    </div>
    
  );
}
