import React, { Component } from 'react'
import tripService from "../lib/api-service";
import "./banner.css";
import moment from 'moment';




export default class Banner extends Component {


  render() {
    const { city,end } = this.props.stopOver;

    let time = moment(new Date()).format('h:mm');
    let endTime = moment(end).format('h:mm');
    return (
      <div className="banner">
        <div>
          <h1>{city} Airport</h1>
          <img src="/honkong.jpg" alt="Airport img" />
          <div className="next-fligth-time">
            <p>Current time</p>
            <h3 >{time}</h3>
          </div>
          <div className="current-time">
            <p>Next departure</p>
            <h3>{endTime}</h3>
          </div>
        </div>  
      </div>
    )
  }
}
