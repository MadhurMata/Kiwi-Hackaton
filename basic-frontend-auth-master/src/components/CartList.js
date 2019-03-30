import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import CardStopOver from './CardStopOver';

class CartList extends Component {
  render() {
    const { otherUsersStopOver } = this.props;
    
    return (
      <div className="classList">
        {otherUsersStopOver.map((stopover,i) => <CardStopOver stopover={stopover} key={i}/>)}
      </div>
    )
  }
}

export default withAuth(CartList);


