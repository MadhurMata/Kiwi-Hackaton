import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Messages from './pages/Messages';
import AuthProvider from './components/AuthProvider';
import Home from './pages/Home';
import './App.css'


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar data='data' />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/messages" component={Messages} />


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
