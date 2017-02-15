var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    index: function(req, res) {
      User.find( function (err, users) {
          console.log(users);
          res.json({ users: users });
      })
    },
    create: function (req, res){
        console.log('hello');
        var user = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            password_conf: req.body.password_conf,
            birthday: req.body.birthday,
            gender: req.body.gender
        });
        user.save(function(err){
            if (err){
                console.log(err);
            } else{
                console.log('successfully saved', user);
            }
            res.json({ user: user });
        });
    }
};
