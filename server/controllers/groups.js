var mongoose = require('mongoose');
var Groups = mongoose.model('Groups');

module.exports = {
  index: function(req, res) {
      Groups.find({}).populate('answers').exec( function (err, groups) {
          console.log(groups);
          res.json({ groups: groups });
    })
  }
}
