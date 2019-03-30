const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;


const matchesSchema = new Schema({
  users: [{ type: ObjectId, ref: 'User'}],
  startTime: String,
  endTime: String,
  locaztion: String
});

const Matches = mongoose.model('Matches', matchesSchema);

module.exports = Matches;