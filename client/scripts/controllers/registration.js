//myApp.controller('RegistrationController', ['$scope', function($scope){
//    console.log("Yes");
//    $scope.onSubmit = function (){
//        console.log("CLICKED!");
//    }
//}]);


console.log("Boo live coding");

myApp.controller('RegistrationController',['$scope', function($scope){
    console.log("Controller iz loaded");
    $scope.onSubmit = function(){
    console.log("CLICKED");
    }
}]);
