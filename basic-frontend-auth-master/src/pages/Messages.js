import React, { Component } from 'react';
import Send from "@kiwicom/orbit-components/lib/icons/Send";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Text from "@kiwicom/orbit-components/lib/Text";
import api from '../lib/api-service';
import './Messages.css';
import { withAuth } from '../components/AuthProvider';

class Messages extends Component {
  state = {
    content: '',
    messages: [],
  }

  componentDidMount() {
    const { matchId } = this.props.location.state;
    console.log("matchID from location",matchId);
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
  sendMessage = async () => {
    const { content } = this.state;
    const { _id } = this.props.user;
    const { matchId } = this.props.location.state;
    await api.createMessage(matchId, content, _id );
    const messages = await api.getMessagesOfMatch(matchId)

    this.setState({
      messages,
    });
  }

  render() {
    const { messages } = this.state;

    console.log("STATE MESSAGES",messages);
    const { user } = this.props;
    return (
      <div className="conversation">
        {messages && messages.map(message => {
          console.log("message",message);
          if (message.sender !== user) {
            return (
              <div className="box-conversation sender">
                <Heading type='title3'>{message.sender.username}</Heading>
                <Text>{message.content}</Text>
              </div>
            );
          } else {
            return (
              <div className="box-conversation recipient">
                <Heading type='title3'>{message.sender.username}</Heading>
                <Text>{message.content}</Text>
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

export default withAuth(Messages);