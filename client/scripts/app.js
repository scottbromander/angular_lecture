var myApp = angular.module('myApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/views/routes/home.html",
             controller: 'RegistrationController'
        }).
        when('/code', {
            templateUrl: "/views/routes/code.html",
            controller: 'RegistrationController'
        }).
        when('/projects', {
            templateUrl: "/views/routes/projects.html",
            controller: 'RegistrationController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);





//myApp.controller('WelcomeController',["$scope", "$http", function($scope, $http){
//    $scope.heading = "Message: ";
//    $scope.persons = [];
//
//    $scope.updateMessage = function(){
//        $scope.message = "Hello, " + $scope.name + "!";
//    };
//
//    $scope.goodByeMessage = function(){
//        $scope.message = "Goodbye, " + $scope.name;
//    };
//
//    $scope.grabinfo = function (){
//        return $http.get('/info').then(function(response){
//           if(response.status !== 200){
//               throw new Error("I haz sad.");
//           }
//
//            $scope.persons.push(response.data);
//            console.log($scope.persons);
//            return response.data;
//        });
//    };
//}]);