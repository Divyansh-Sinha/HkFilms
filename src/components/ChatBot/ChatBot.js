import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import {ThemeProvider} from 'styled-components'

const config ={
    width: "320px",
    height: "440px",
    floating: true,
  };

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#025918',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#025918',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  

class ChatBots extends Component {
  render() {
    
    return (
      <ThemeProvider theme={theme}>
        <ChatBot 
        steps={[
          {
            id:'intro', 
            message:'Welcome To Hk Films', 
            trigger:'message1',
          },

          {
              id : 'message1',
              message: 'What Do You Want To Know',
              trigger : 'content'
          },
          {
            id: 'content',
            options: [
              {value:'Course Detail', label: 'Course Detail' , trigger : 'message2'},
              {value: 'Timing Of Class' , label : 'Timing Of Class' , trigger : 'Timing'},
              {value: 'Contact' , label : 'Contact' , trigger : 'Contact'}
            ]
          },
          {
            id: 'message2',
            message :  'Zumba,Arobica,Kids Dance,Piano Class,Keyboard Class,Acting Class,Film Making', 
            trigger : 'Course-Detail'
          },
          {
            id:'Course-Detail',
            
            options : [
              {value : 'content' , label : 'content' , trigger : 'content'},
              {value : 'next' , label : 'next' , trigger : 'message3'},
            ]
    
          },
          {
              id: 'message3',
              message : 'About Which Class You Want To Know',
              trigger : 'next-message',
          },
          {
              id: 'next-message',
             
              options : [
                {value : 'zumba' , label : 'zumba' , trigger : 'zumba'},
                {value : 'arobica' , label : 'arobica' , trigger : 'arobica'},
              ]

          },

          {
              id: 'zumba',
              message : 'Monday To Friday  -- 1500/Mo',
              trigger : 'content',
          },

          {
              id: 'arobica',
              message : 'Monday To Friday  -- 1500/Mo',
              trigger : 'content',
          },
          {
              id: 'Timing',
              message : 'Depends Upon Different Classes You Can Search In Course Details',
              trigger : 'content',
          },
          {
            id:'Contact', 
            message:'phone number = +91 - 6200878543 , Email = xyz@gmail.com', 
            trigger : 'content'
          },

        ]}
        {...config}
      />

</ThemeProvider>
    );
  }
       
}

export default ChatBots;