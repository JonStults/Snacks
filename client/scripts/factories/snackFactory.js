console.log('Snack Factory');
app.factory('snackFactory', ['$http', function($http) {
      var factory = {};
      var errors = {message: ''};
      factory.currentUser = '';
      factory.createUser = function(newUser, finishedCreating){
        var first_name = newUser.first_name;
        var last_name = newUser.last_name;
        if(!newUser) {
          errors.message = "Please fill out all fields";
          return false;
        }
        if(first_name.length < 2){
          errors.message = 'Question must be at least 2 characters long';
          return false;
        }
        else if(last_name.length < 2){
          errors.message = 'Question must be at least 2 characters long';
          return false;
        }
        else {
          $http.post('/users/create', newUser).then(function(response){
              console.log(response);
              finishedCreating(response.data.user);
        });
        errors.message = '';
      };
    };
    return factory;
}]);
