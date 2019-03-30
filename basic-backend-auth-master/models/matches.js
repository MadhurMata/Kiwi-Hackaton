const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;


const matchesSchema = new Schema({
  users: [{ type: ObjectId, ref: 'User'}],
  startTime: Date,
  endTime: Date,
  location: String
});

const Matches = mongoose.model('Matches', matchesSchema);

module.exports = Matches;