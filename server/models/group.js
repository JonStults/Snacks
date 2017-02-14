// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var GroupSchema = new mongoose.Schema({
    restaurant: String,
    users_max: Number,
    users_min: Number,
    date: Date,
    gender_pref: String,
    type: String,
    members: [{type: Schema.Types.ObjectId, ref: 'User'}],
    creator: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})
// register the schema as a model
var Group = mongoose.model('Group', GroupSchema);
