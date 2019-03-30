import React, { Component } from 'react'
import Banner from "../components/Banner";
import tripService from "../lib/api-service";
import CartList from '../components/CartList';

export default class Home extends Component {

  state = {
    stopOver: {},
    otherUsersStopOver: [],
    isLoading:true,
  }

  componentDidMount() {
    this.getNextStopOver();
  }

  getNextStopOver = async () => {

    try {

      const stopOver = await tripService.getNextStopOverOfUser("5c9f14e33f8a0430fa3e6b6c")
      const { location, start, end } = stopOver[0];
      const otherUsersStopOver = await tripService.getStopOvers(location, start, end);

      this.setState({
        stopOver: stopOver[0],
        otherUsersStopOver,
        isLoading:false,
      })

    }
    catch (error) {

      console.log("error", error);
    }
  };


  render() {
    const { stopOver, otherUsersStopOver, isLoading } = this.state;

    if (isLoading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
    }

    return (
      <div>
        <h1>Home</h1>
        {/* <Banner stopOver={stopOver} /> */}
        <CartList stopOver={stopOver} otherUsersStopOver={otherUsersStopOver} />
      </div>
    )
  }
}
