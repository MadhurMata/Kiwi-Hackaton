const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');
const Match = require('../models/matches');
const User = require('../models/user');
const Message = require('../models/messages');
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
              { $and: [{ start: { $lte: x } }, { end: { $gte: y } }] },
              { $and: [{ start: { $gte: x } }, { end: { $lte: y } }] },
              { $and: [{ start: { $gte: x } }, { start: { $lte: y } }] },
              { $and: [{ end: { $gte: x } }, { end: { $lte: y } }] },
            ]
          }
        ]
      }
    }
  }).populate('userId')
    .then((trips) => {
      res.json(trips);
    })
});

router.post('/create-match', (req, res, next) => {
  const { users, startTime, endTime, location } = req.body;

  Match.create({ users, startTime, endTime, location })
    .then(createdMatch => {
      res.json(createdMatch);
    });
});

router.get('/:userId/matches', (req, res, next) => {
  const { userId } = req.params;

  Match.find({ users: { $in: [userId] } })
    .then(matches => {
      res.json(matches);
    });
})

router.get('/:matchId/messages', (req, res, next) => {
  const { matchId } = req.params;

  Message.find({ matchId: matchId })
    .then(messages => {
      res.json(messages);
    });
})

router.post('/create-message', (req, res, next) => {
  const { matchId, content, sender } = req.body;

  Message.create({ matchId, content, sender })
    .then(createdMessage => {
      res.json(createdMessage);
    });
});

module.exports = router;
