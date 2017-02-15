// here we load the Poll and User model
var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/users.js');


module.exports = function(app) {
    app.post('/users/create', users.create);
}
