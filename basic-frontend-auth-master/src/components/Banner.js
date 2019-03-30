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
    tripService.getNextStopOver()
      .then(data => {
        console.log(data)
        this.setState({
          stopOver: data,
        })
      }).catch(error => {
        console.log("error", error);
      });
  };

  render() {
    return (
      <div>
        <h1>Banner</h1>
        <img src="https://www.indiaretailforum.in/wp-content/uploads/2018/01/mall.jpg" alt="Airport img"/>

      </div>
    )
  }
}
