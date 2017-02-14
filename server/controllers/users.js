console.log('polls controller');
var mongoose = require('mongoose')
var users = mongoose.model('User');
module.exports = {
  create: function (req, res){
    console.log('hello');
    var user = new users({
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
    })
  },
}
