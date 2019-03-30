import React, { Component } from 'react'

export default class Banner extends Component {


  render() {
    const { city } = this.props.stopOver;

    return (
      <div>
        <h1>Banner</h1>
        <h2>{city}</h2>
        <img src="https://www.indiaretailforum.in/wp-content/uploads/2018/01/mall.jpg" alt="Airport img" />
      </div>
    )
  }
}
