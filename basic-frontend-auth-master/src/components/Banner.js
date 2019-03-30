import React, { Component } from 'react'
import tripService from "../lib/api-service";
import "./banner.css";
import moment from 'moment';




export default class Banner extends Component {
  state = {
    stopOver: {}
  }

  componentDidMount() {
    this.getNextStopOver();
  }

  getNextStopOver = () => {
    tripService.getNextStopOver("5c9f14e33f8a0430fa3e6b6c")
      .then(data => {
        console.log(data)
        this.setState({
          stopOver: data[0],
        })
      }).catch(error => {
        console.log("error", error);
      });
  };

  render() {
    // const { city } = this.state.stopOver;
    let time = moment(new Date()).format('h:mm');
    return (
      <div className="banner">
        <div>
          <h1>Hong Kong Airport</h1>
          {/* <h2>{city} Airport</h2> */}
          <img src="/honkong.jpg" alt="Airport img" />
          <div className="next-fligth-time">
            <p>Current time</p>
            <h3 >{time}</h3>
          </div>
          <div className="current-time">
            <p>Next departure</p>
            <h3>15:55</h3>
          </div>
        </div>  
      </div>
    )
  }
}
