const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  matchId: { type: ObjectId, ref: 'Matches'},
  content: String,
  sender: { type: ObjectId, ref: 'User'}
});

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;