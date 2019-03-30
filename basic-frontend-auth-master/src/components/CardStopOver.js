import React, { Component, Fragment } from "react";
import api from '../lib/api-service';
import { withAuth } from '../components/AuthProvider';
import './CardStopOver.css';
import { Redirect } from 'react-router-dom';

const moment = require("moment");

class CardStopOver extends Component {
  state = {
    opened: false,
    matchId:false,
  };


  toggleOpen = () => {
    const { opened } = this.state;

    this.setState({
      opened: !opened
    });
  };

  startChat = async () => {
    console.log(this.props);
    const { start, end, location } = this.props.stopover.stopOvers[0];
    const { userId } = this.props.stopover;
    const { user } = this.props;


    const match = await api.createMatch([user, userId], start, end, location);

    console.log(match);

    this.setState({
      matchId:match._id,
    })

  }


  render() {
    const { opened, matchId } = this.state;

    const { start, end } = this.props.stopover.stopOvers[0];
    const {
      avatar,
      username,
      nationality,
      interests,
      languages
    } = this.props.stopover.userId;

    const startMoment = moment(start);
    const endMoment = moment(end);
    let diff = endMoment.diff(startMoment);
    let duration =
      moment
        .utc(diff)
        .format("H:mm")
        .toString()
        .replace(":", "h") + "min";


    if (matchId) {
      return <Redirect to={{ pathname: '/messages', state: { matchId: matchId } }} />
    }

    return (
      <div id="card-stop-over">
        <button onClick={this.toggleOpen} id="card-stop-over-button">
          <div id="card-stop-over-container">
            <div id="card-stop-over-container">
              <img src={avatar} alt={username} id="card-stop-over-avatar" />
              <div>
                <h2>{username}</h2>
                <p id="card-stop-over-nationality">{nationality}</p>
                <p className="colorGreen">
                  Arriving at {moment(start).format("h:mm")}
                </p>
              </div>
            </div>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-down"
                className="svg-inline--fa fa-angle-down fa-w-10"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                />
              </svg>
              <p id="card-stop-over-duration">{duration}</p>
            </div>
          </div>
            {opened && (
              <Fragment>
                <div>
                  <b>Interests</b>
                  <p>{interests.join(', ')}</p>
                  <b>Languages</b>
                  <p>{languages.join(', ')}</p>
                </div>
                <button onClick={this.startChat} id=''>
                  <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path id="messages-outline-a" d="M4,2 C2.8954305,2 2,2.8954305 2,4 L2,17 L6,13 L15,13 C16.1045695,13 17,12.1045695 17,11 L17,4 C17,2.8954305 16.1045695,2 15,2 L4,2 Z M4,4 L15,4 L15,11 L6,11 L4,13 L4,4 Z M19,6 L19,8 L20,8 L20,18 L18,16 L8,16 L8,15 L6,15 L6,16 C6,17.1045695 6.8954305,18 8,18 L18,18 L22,22 L22,8 C22,6.8954305 21.1045695,6 20,6 L19,6 Z"/></svg>
                </button>
              </Fragment>
            )}
        </button>
      </div>
    );
  }
}


export default withAuth(CardStopOver);