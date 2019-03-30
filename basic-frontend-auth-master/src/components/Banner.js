import React, { Component } from 'react'
import tripService from "../lib/api-service";


export default class Banner extends Component {
  state = {
    stopOver: {}
  }

  componentDidMount() {
    this.getNextStopOver();
  }

  getNextStopOver = () => {
    // tripService.getNextStopOver("5c9f14e33f8a0430fa3e6b6c")
    //   .then(data => {
    //     console.log(data)
    //     this.setState({
    //       stopOver: data[0],
    //     })
    //   }).catch(error => {
    //     console.log("error", error);
    //   });
  };

  render() {
    const { city } = this.state.stopOver;

    return (
      <div>
        <h1>Banner</h1>
        <h2>{city}</h2>
        <img src="https://www.indiaretailforum.in/wp-content/uploads/2018/01/mall.jpg" alt="Airport img" />

      </div>
    )
  }
}
