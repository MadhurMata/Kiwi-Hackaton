const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  userId: { type: ObjectId, ref: 'User'},
  route: [{
    fligth_no: String,
    operating_carrier: String,
    flyFrom: String,
    flyTo: String,
    local_departure: String,
    local_arrival: String
  }]
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;