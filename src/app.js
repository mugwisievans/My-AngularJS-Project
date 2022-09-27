( function( ){

    angular.module('MyFirstApp', [])
    .controller('MyFirstController', function($scope){
        $scope.name = "Evans";
        $scope.sayHello = function(){
            return "Hello";
        };

    });
})();