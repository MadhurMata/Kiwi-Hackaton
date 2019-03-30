import React, { Component } from 'react';
import Send from "@kiwicom/orbit-components/lib/icons/Send";
import Card, { CardHeader } from "@kiwicom/orbit-components/lib/Card";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Text from "@kiwicom/orbit-components/lib/Text";
import api from '../lib/api-service';
import './Messages.css';

export default class Messages extends Component {
  state = {
    content: '',
    messages: [],
  }

  componentDidMount() {
    const { matchId } = this.props;
    api.getMessagesOfMatch(matchId)
      .then(messages => {
        this.setState({
          messages,
        });
      })
      .catch(error => console.log(error));
  }

  textInputHandler = (e) => {
    this.setState({
      content: e.target.value,
    })
  }
  sendMessage = () => {
    const { content } = this.state;
    const { matchId, user } = this.props;
    api.createMessage(matchId ,content, user);
  }

  render() {
    const { messages } = this.state;
    const { user } = this.props;
    return (
    <div className="conversation"> 
      {messages && messages.map(message => {
        if(message.sender !== user) {
          return (
            <div className="box-conversation recipient">
              <Heading type='title3'>Josefine</Heading>
              <Text>Hey there, do you want to meet.</Text>
            </div>
          );
        } else {
          return (
            <div className="box-conversation sender">
              <Heading type='title3'>Matt</Heading>
              <Text>Yes sure, where?</Text>
            </div>
          );
        }
      })}
      <div className="input-bar">
         <input className="input" type="text" placeholder='Type an SMS message' value={this.state.content} onChange={this.textInputHandler} />
         <button className="send-btn" onClick={this.sendMessage}><Send /></button>
      </div>
    </div>
    );
  }
}
