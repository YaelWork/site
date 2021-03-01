import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import * as emailjs from 'emailjs-com'
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import {messages} from './messages';
import { Button, Icon } from 'semantic-ui-react'
import './Style.scss';
export function Contact() {
  useInjectSaga({ key: 'contact', saga });
  const [SendingMessage, setSendingMessage] = useState({ 
  fullname:{value:'',pattern:/^[A-Za-z\u0590-\u05fe ,.'-]+$/i,valid:false,errorletters:''} , 
  email:{value:'',pattern:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,valid:false,errorletters:''},
  message:{ value:'',pattern:/^/,valid:false,errorletters:'' }});

  const [Response,setResponse]=useState("")

  
  function handleChange(event, typevalue) {
    setResponse("");
    const NewMessage = { ...SendingMessage };
    const fieldChange = { ...NewMessage[typevalue] };
    fieldChange.value = event.target.value;
    if (fieldChange.pattern.test(String(fieldChange.value).toLowerCase())) {
      fieldChange.valid = true;
      fieldChange.errorletters='';
  }
  else{
      fieldChange.valid = false;
      fieldChange.errorletters=messages.requireinput;
  }
  NewMessage[typevalue] = fieldChange;
  setSendingMessage({...NewMessage});
  }


   function sendMail() {
     if(SendingMessage.fullname.valid&&SendingMessage.email.valid&&SendingMessage.message.valid){
     window.Email.send({
       Host:"smtp.elasticemail.com",
       Username:"yael02115@gmail.com",
       Password:"44A6B8A0829FDCD3F4FD648E1D13A1284CCB",
       Port:2525,
       To:"yael02115@gmail.com",
       From:"yael02115@gmail.com",
       Subject:'Hi my name is '+SendingMessage.fullname.value+' sending you an email from your site...',
       Body:SendingMessage.message.value+' my email '+SendingMessage.email.value
     })
     const ResetMessage={ ...SendingMessage };
     ResetMessage.fullname.valid=false;
     ResetMessage.fullname.value='';
     ResetMessage.email.value='';
     ResetMessage.email.valid=false;
     ResetMessage.message.valid=false;
     ResetMessage.message.value='';
     setSendingMessage({...ResetMessage})
     setResponse("Thank you!!");
    }
   }

  return (
    <div id="contact">
      <div id="form">
      <div>
        <input
          id="name"
          required
          type="text"
          value={SendingMessage.fullname.value}
          placeholder={messages.labelfullname}
          onChange={event => {
            handleChange(event, messages.fullname);
          }}  
        />         
      <label className="errors">{SendingMessage.fullname.errorletters}</label>
      </div>
  
      <div>
        <input
          id="email"
          required
          type="email"
          value={SendingMessage.email.value}
          placeholder={messages.labelemail}
          onChange={event => {
            handleChange(event, messages.email);
          }}       
        />
      <label className="errors">{SendingMessage.email.errorletters}</label></div>
      <div>

        <textarea rows="4" cols="50" name="subject" type="text"
          value={SendingMessage.message.value} placeholder={messages.placeholdermessage} id="message" required  onChange={event => {
            handleChange(event, messages.message);
          }}></textarea>

      <label className="errors">{SendingMessage.message.errorletters}</label></div></div>
      <Button animated>
        
      <Button.Content visible >Send me</Button.Content>
      <Button.Content hidden onClick={sendMail}>
        <Icon name='send' />
      </Button.Content>
    </Button>
    {Response !==''? <label id="reponse">{Response}</label>:null}
    </div>
  );
}

Contact.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(Contact);
