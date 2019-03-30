const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');
const Match = require('../models/matches');
const User = require('../models/user');
const moment = require('moment');

router.get('/:userId/next-stop-over', (req, res, next) => {
  const { userId } = req.params;
  Trip.find({ userId })
    .then((trips) => {
      const stopOvers = trips.reduce((acc, trip) => {
        return [...acc, trip.stopOvers];
      }, []);
      console.log('STOPOVERS', stopOvers);
      stopOvers.sort((a, b) => {
        if (moment(a.start).isBefore(b.start)) {
          return -1;
        }
        return 1;
      });
      res.json(stopOvers[0]);
    });
});

router.get('/stopovers', (req, res, next) => {
  const { location, startDate, endDate } = req.query;
  console.log("location", location);

  const x = new Date(startDate);
  const y = new Date(endDate);


  Trip.find({
    stopOvers:
    {
      $elemMatch: {
        $and: [
          { location: location },
          {
            $or: [
              { $and: [{ start: { $lte: x }}, {end: { $gte: y }}] },
              { $and: [{ start: { $gte: x }}, {end: { $lte: y }}] },
              { $and: [{ start: { $gte: x }}, {start: { $lte: y }}] },
              { $and: [{ end: { $gte: x }}, {end: { $lte: y }}] },
            ]
          }
        ]
      }
    }
  })
    .then((trips) => {
      console.log("trips stopover", trips);
    })


});


module.exports = router;
