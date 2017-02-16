app.controller('loginController', ['$scope', 'snackFactory', '$cookies', '$location', function($scope, snackFactory, $cookies, $location){
  $scope.callLoginUser = function(user) {
		snackFactory.login(user, function(status, response) {
			if (status == false) {
				// login failed, send the error message to the client
				$scope.user.password = ""; // empty the password
				$scope.loginError = response;
			}
			else {
				// login successed! direct the user to the home page
				$scope.user = {}; // clear login form
				$scope.loginError = {}; // clear login error.
				// set cookies of user's id for retrieving snack information later on
				$cookies.put('user_id', response._id);
				$location.url('/home');
			}
		});
	}
}]);
