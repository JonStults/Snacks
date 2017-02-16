// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');

// create the schema
var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
          type: String,
          validate: {
					validator: function(email) {
						return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
					},
					message: '{VALUE} is not a valid email address!'
				}
      },
  password: {
          type: String,
          validate: {
						validator: function(password) {
										return /^(?=.*[A-Z])[A-Za-z\d$@$!%*?&]{8,32}/.test( password );
									},
									message: "Password failed validation, you must have at least 1 uppercase."
					}
        },
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
});

mongoose.plugin(uniqueValidator, { message: "'{VALUE}' is already taken. Use another {PATH}!"});

UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

// use non has bcrypt to increase efficiency

UserSchema.pre('save', function(done) {
	this.password = this.generateHash(this.password);
	done();
});
// register the schema as a model
var User = mongoose.model('User', UserSchema);
