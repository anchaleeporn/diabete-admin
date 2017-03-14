myApp.controller('AppCtrl2', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
    
var refreshS = function() {
$http.get('/settings').success(function(response) {
    console.log("I got the data I requested");
    $scope.settings = response;
    $scope.setting = "";
  });
};

refreshS();

$scope.addSetting = function() {
console.log($scope.setting);
  $http.post('/settings', $scope.setting).success(function(response) {
    console.log(response);
    refreshS();
  });
};

$scope.removeS = function(id) {
  console.log(id);
$http.delete('/settings/' + id).success(function(response) {
    refreshS();
  });
};

$scope.editS = function(id) {
    console.log(id);
    $http.get('/settings/' + id).success(function(response) {
    $scope.setting = response;
  });
};


$scope.updateS = function() {
  console.log($scope.setting._id);
  $http.put('/setting/' + $scope.setting._id, $scope.setting).success(function(response) {
    refreshS();
  })
};

}]);﻿