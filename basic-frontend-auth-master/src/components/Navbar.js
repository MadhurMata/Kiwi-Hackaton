import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';
import SelfTransfer from "@kiwicom/orbit-components/lib/icons/SelfTransfer";
import Profile from "@kiwicom/orbit-components/lib/icons/PassengerOutline";
import Messages from "@kiwicom/orbit-components/lib/icons/Messages";
import './Navbar.css';

class Navbar extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    // if (isLogged) {
    //   return <div>
    //     <p>username: { username }</p>
    //     <p onClick={logout}>Logout</p>
    //   </div>
    // } else {
    //   return <div>
    //     <Link to='/login'>Login</Link>
    //     <Link to='/signup'>Signup</Link>
    //   </div>
    // }
    return (
      <div className="navbar">
        <div className="navigation-container">
          <Profile size="medium" customColor="#bac7d5" />
          <p>Profile</p>

        </div>
        <div className="navigation-container">
          <SelfTransfer size="medium" customColor="#00a991" />
          <p>Stopover</p>
        </div>
        <div className="navigation-container">
          <Messages size="medium" customColor="#bac7d5" />
          <p>Messages</p>
        </div>
      </div>
    );
  }
}

export default withAuth(Navbar);
