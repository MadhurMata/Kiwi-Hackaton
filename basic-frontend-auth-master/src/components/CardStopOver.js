import React from 'react'
import './CardStopOver.css'
const moment = require('moment');


export default function CardStopOver(props) {

  const open = () => {
    console.log("open");
  }
  console.log(props);

  const { start, end } = props.stopover.stopOvers[0];
  const { avatar, username, nationality } = props.stopover.userId;

  const startMoment = moment(start);
  const endMoment = moment(end);
  const duration = moment.duration(endMoment.diff(startMoment));
  const hours = duration.asHours();
  console.log(hours)

  let diff = endMoment.diff(startMoment);

  // execution
  let f = moment.utc(diff).format("H:mm").toString().replace(":","h") + "min";

  return (
    <div id='card-stop-over'>
      <button onClick={open} id='card-stop-over-button'>
        <div id='card-stop-over-container'>
          <div id='card-stop-over-container'>
            <img src={avatar} alt={username} id='card-stop-over-avatar' />
            <div>
              <h2>{username}</h2>
              <p id='card-stop-over-nationality'>{nationality}</p>
              <p className='colorGreen'>Arriving at {moment(start).format('h:mm')}</p>
            </div>
          </div>
          <div>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa fa-angle-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
            <p id='card-stop-over-duration'>{f}</p>
          </div>
        </div>
      </button>
    </div>

  )
}


