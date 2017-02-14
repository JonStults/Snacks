var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when('/register', {
        templateUrl: "partials/register.html"
    }),
    $routeProvider.when('/home', {
        templateUrl: "partials/home.html"
    }),
    $routeProvider.otherwise({
        templateUrl: "partials/login.html"
    })
});
