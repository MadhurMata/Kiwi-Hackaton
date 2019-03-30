require('dotenv').config();
const mongoose = require('mongoose');
const Trip = require('../models/trip');
const Matches = require('../models/matches');
const moment = require('moment');

const trips = require('./data.json');
const { data } = JSON.parse(JSON.stringify(trips));


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected');
    return Trip.deleteMany();
  })
  .then(() => {
    
    console.log('deleted');
    const arrayOfTrips = data.map((trip) => {
      let stopOvers = [];
      trip.route.forEach((flight, i, arr) => {
        if(i != arr.length - 1) {
          const duration = moment.duration(moment(arr[i + 1].local_departure)
          .diff(moment(flight.local_arrrival)));
          // console.log("DURATION", duration);
          stopOvers.push({
            start: flight.local_arrival,
            end: arr[i + 1].local_departure,
            city:flight.cityTo,
            location: flight.flyTo,
            duration,
          });
        }
      });
      console.log(stopOvers);
      return {
        userId: trip.userId,
        stopOvers,
        route: trip.route,
      }
    });
    return Trip.insertMany(arrayOfTrips);
  })
  .then(() => {
    console.log('loaded trips');





    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('error ', err);
  });
