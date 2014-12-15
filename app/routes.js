var User = require('./models/user');

module.exports = function(app) {

  // server routes ==========================================
  app.get('/api/users', function(req, res){
    User.find(function(err, users){
      if (err) 
        res.send(err);

      res.json(users);  //return all the users in JSON format
    });
  });


  // frontend routes =========================================
  app.get('*',function (req, res){
    res.sendfile('./public/views/index.html');  // load our public/index.html file   
  });



};
