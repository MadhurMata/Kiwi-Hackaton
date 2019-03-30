import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
// import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Messages from './pages/Messages';
// import Private from './pages/Private';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
import AuthProvider from './components/AuthProvider';
import AnonRoute from './components/AnonRoute';
import Home from './pages/Home';
import './App.css'


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar data='data' />
          <Switch>
          <AnonRoute exact path="/" component={Home} />
          <AnonRoute exact path="/messages" component={Messages} />

            {/* <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} /> */}
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
