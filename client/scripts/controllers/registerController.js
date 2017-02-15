app.controller('registerController', ['$scope', 'snackFactory', '$location', '$routeParams', function($scope, snackFactory, $location, $routeParams){
  $scope.users = [];
  $scope.callCreateUser = function(newUser){
    snackFactory.createUser(newUser, function(createdUser){
      $scope.users.push(createdUser);
      $location.url('/home');
    })
  };
}]);
