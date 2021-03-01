/*
 * Contact Messages
 *
 * This contains all the text for the Contact container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Contact';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Contact container!',
  },
});
export const messages={
  fullname:'fullname',
  labelfullname:'What is your name?',
  email:'email',
  labelemail:'What is your email?',
  message:'message',
  labelmessage:'Please enter your message',
  placeholdermessage:'Please enter your message',
  requireinput:'This is a required field',
};
