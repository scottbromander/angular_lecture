var myApp = angular.module('myApp',[]);

myApp.controller('WelcomeController',["$scope", function($scope){
    $scope.heading = "Message: ";

    $scope.updateMessage = function(){
        $scope.message = "Hello, " + $scope.name + "!";
    };

    $scope.goodByeMessage = function(){
        $scope.message = "Goodbye, " + $scope.name;
    };
}]);