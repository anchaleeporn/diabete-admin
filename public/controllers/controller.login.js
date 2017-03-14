var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
	.when('/' ,{
		templateUrl: 'login.html',
		controller: 'loginCtrl'
	})
	.when('/setting',{
		templateUrl: 'setting.html',
		controller: 'AppCtrl2'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller('loginCtrl',function($scope, $location) {
	$scope.submit = function(){
		var uname = $scope.username;
		var password = $scope.password;
		if ($scope.username == 'admin' && $scope.password == 'admin') {
			//window.location.hash = '#/index';
			$location.path('/index');
			console.log("Login Seccess");
		} else {
			alert('Wrong Staff');
		}
	};
});