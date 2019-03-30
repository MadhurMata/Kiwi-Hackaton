const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const tripSchema = new Schema({
  userId: { type: ObjectId, ref: 'User'},
  stopOvers: [{
    start: Date,
    end: Date,
    city: String,
    location: String,
    duration: Number,
  }],
  route: [{
    fligth_no: Number,
    operating_carrier: String,
    flyFrom: String,
    flyTo: String,
    local_departure: Date,
    local_arrival: Date
  }]
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;