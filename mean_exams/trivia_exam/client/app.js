var app = angular.module('app', ['ngRoute'])
app.config(function($routeProvider) {
  $routeProvider
  .when('/',{
      templateUrl: 'partials/wall.html',
      controller:'wallController'
  })
  .when('/score/:score',{
      templateUrl: 'partials/wall.html',
      controller:'wallController'
  })
  .when('/add', {
      templateUrl: 'partials/new.html',
      controller: 'newController'
  })
  .when('/play_game', {
      templateUrl: 'partials/play.html',
      controller: 'playController'
  })
  .otherwise({
      redirectTo: '/'
  })
})
