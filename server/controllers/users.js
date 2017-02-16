var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = mongoose.model('User');

module.exports = {
  login: function(req, res) {
		var email = req.body.email;
		var password = req.body.password;

		User.findOne({ email: email }, function(err, user) {
			if (user == null) {
				console.log("[Login: ERROR] failed to retrieve a user!");
				res.json({errors: "Email or password is not valid."})
			}
			else {
				if (bcrypt.compareSync(password, user.password) == false) {
					console.log("[Login: ERROR] Given password did not match the database password!");
					res.json({errors: "Email or password is not valid."})
				}
				else {
					console.log("[Login: SUCCESS] passwords matched! User login successful!");
					res.json( user );
				}
			}
		});
	},

  register: function(req, res) {
		var user = new User ({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
			email: req.body.email,
      password: req.body.password,
      password_conf: req.body.password_conf,
      birthday: req.body.birthday,
      gender: req.body.gender
		});
    user.save( function(err, user) {
			if (err) {
				console.log("[Register: ERROR] failed to create a new user!: ", err);
				res.json({ errors: err.errors });
			}
			else {
				console.log("[Register: SUCCESS] successfully created a new user!")
				res.json( user );
			}
		});
  },

  show: function(req, res) {
    User.findOne({ _id: req.params.id }, function(err, user) {
      if (err) {
        console.log("[Show: ERROR] failed to retrieve user's information!")
        res.json({errors: "failed to retrieve a user!"});
      }
      else {
        console.log("[Show: SUCCESS] successfully retrieved a user's information!")
        res.json( user );
      }
    });
  }
};
