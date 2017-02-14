var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  index: function(req, res) {
      User.find( function (err, users) {
          console.log(users);
          res.json({ users: users });
    })
  }
}
