import React, { Component } from 'react';
import InputField from "@kiwicom/orbit-components/lib/InputField";
import Send from "@kiwicom/orbit-components/lib/icons/Send";

export default class Messages extends Component {
  state = {
    content: '',
  }

  textInputHandler = (e) => {
    this.setState({
      content: e.target.value,
    })
  }
  sendMessage = () => {
    console.log('HOLA');

  }

  render() {
    return (
      <div>
        <InputField
          size="medium"
          type="text"
          name="input"
          inlineLabel={false}
          value={this.state.content}
          dataTest="test"
          placeholder="Type an SMS message"
          required={false}
          suffix={<Send />}
          onChange={this.textInputHandler}
        />
      </div>
    )
  }
}
