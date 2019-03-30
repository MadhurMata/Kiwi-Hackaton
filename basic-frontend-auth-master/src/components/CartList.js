import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';
import tripService from "../lib/api-service";

class CartList extends Component {

  state = {
    stopOvers: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getNextStopOver();
  }

  getNextStopOver = () => {
    tripService.getNextStopOverOfUser("5c9f14e33f8a0430fa3e6b6c")
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
    const { isLoading, stopOvers } = this.state; 

    if(isLoading){
      return (
        <div>
          <h1>loading</h1>
        </div>
      )
    }

    return (
      <div>
        {stopOvers.map((stopover)=><h2>{stopOver}</h2>)}
      </div>
    )
  }
}

export default withAuth(CartList);
