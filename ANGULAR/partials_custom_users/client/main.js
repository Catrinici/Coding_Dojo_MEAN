var myAppModule = angular.module('myApp', ['ngRoute']);
    //  use the config method to set up routing:
    myAppModule.config(function ($routeProvider) {
      $routeProvider
        .when('/users',{
            templateUrl: 'partials/customizeUsers.html',
        })
        .when('/list',{
            templateUrl: 'partials/userList.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
    //Factory
    myAppModule.factory('userFactory', function (){
     var factory = {}
     var users = [
       {firstName:"Mike", lastName:'Hannon', favoriteLanguage:'JavaScript'},
       {firstName:"Nelutu", lastName:'Goiman', favoriteLanguage:'Python'}
     ];
     //Pass the user to a controller
     factory.getUser = function(callback){
       callback(users);
     }
     factory.addUser = function(user){
      users.push(user);
   }
     factory.deleteUser = function($index){
      users.splice($index, 1);
   }
     return factory;
   });

   //Controllers 1!!!
   myAppModule.controller('customizeController', ['$scope','userFactory', function($scope, userFactory, $location) {
     function setUser(data){
       $scope.users = data;
       $scope.newUser = {} //Reset form
     }
     $scope.users = []
     userFactory.getUser(setUser);

   //Pass new user info to the factory
   $scope.addUser = function(){
      userFactory.addUser($scope.newUser)
      $scope.newUser = {}; //Reset our form

 }
})
   }
   $scope.deleteUser = function($index){
    userFactory.deleteUser($index);
 }

  }]);
   // Controller 2
   myAppModule.controller('listController', ['$scope','userFactory', function($scope, userFactory) {
    function setUser(data){
      $scope.users = data;
   }

   $scope.users = [];

   //When this controller is loaded, fetch the user list
   userFactory.getUser(setUser);
}])
