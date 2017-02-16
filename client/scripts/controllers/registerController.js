app.controller('registerController', ['$scope', 'snackFactory', '$cookies', '$location', '$routeParams', function($scope, snackFactory, $cookies, $location, $routeParams){
  $scope.newUser = {
  password: "",
  confirm_password: ""
  };
  $scope.callCreateUser = function(newUser) {

		// if password does not match, display warning and do not send the form.
		if ($scope.newUser.password != $scope.newUser.password_conf) {
			$scope.match_fail = "Your password does not match the confirmed password!";
		}
		else { // else passwords match, send the form to the factory
			// empty the matching password error
			$scope.match_fail = "";

			// send request to the factory to attempt registering a user
			snackFactory.register(newUser, function(status, response) {
				if (status == false) { // false: validation errors on the registration form
					// show errors to the user;
					$scope.registerErrors = response;
				}
				else {
					// registration completed, move client to the home page!
					$scope.newUser = {}; // clear registeration form
					$scope.registerErrors = {}; // clear register errors
					// set cookies of user's id for retrieving snack information later on
					$cookies.put('user_id', response._id);
					$location.url('/home');
				}
			});
		}
	}
}]);
