var myApp = angular.module('myApp',[]);

myApp.controller('WelcomeController',["$scope", "$http", function($scope, $http){
    $scope.heading = "Message: ";
    $scope.persons = [];

    $scope.updateMessage = function(){
        $scope.message = "Hello, " + $scope.name + "!";
    };

    $scope.goodByeMessage = function(){
        $scope.message = "Goodbye, " + $scope.name;
    };

    $scope.grabinfo = function (){
        return $http.get('/info').then(function(response){
           if(response.status !== 200){
               throw new Error("I haz sad.");
           }

            $scope.persons.push(response.data);
            console.log($scope.persons);
            return response.data;
        });
    };
}]);