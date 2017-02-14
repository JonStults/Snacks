// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  birthday: Date,
  gender: String,
  looking_for: String,
  location: {
      type: [Number],
      index: '2d'
  },
  range: Number,
  _group: {type: Schema.Types.ObjectId, ref: 'Group'},
  connections: [Number],
  visited:  [Object]
}, {timestamps: true})
// register the schema as a model
var User = mongoose.model('User', UserSchema);
