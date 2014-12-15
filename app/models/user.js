var mongoose = require('mongoose');

// define a model
// module.exports allows us to pass this to other files when it is called

module.exports = mongoose.model('User', {
  name: {type: String, default: ''}
});

