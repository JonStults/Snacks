app.controller('registerController', ['$scope', 'snackFactory', '$location', '$routeParams', function($scope, snackFactory, $location, $routeParams){
  $scope.users = [];
  $scope.createUser = function(newUser){
    snackFactory.createUser(newUser, function(createdUser){
      $scope.users.push(createdUser);
      $location.url('#!/home');
    })
  };
  $scope.errors = snackFactory.getErrors();
}]);
