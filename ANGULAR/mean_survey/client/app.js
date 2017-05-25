var app = angular.module('app', ['ngRoute'])
app.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/logreg.html'
  })
  .when('/dashboard',{
    templateUrl: 'partials/dashboard.html'
  })
  .when('/create',{
    templateUrl: 'partials/create.html'
  })
  .when('/question/:id',{
    templateUrl: 'partials/poll.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
