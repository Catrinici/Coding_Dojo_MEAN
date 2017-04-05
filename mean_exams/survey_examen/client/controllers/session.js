app.controller('sessionController', function ($scope, sessionFactory) {

  sessionFactory.checkStatus(function (data) {
    $scope.curUser = data;
  })

  $scope.login = function () {
    $scope.errors = []

    if (!$scope.user || !$scope.user.name || $scope.user.name.length < 3) {
      $scope.errors.push('Input should be at least 3 characters long ')
    }
    else if ($scope.user.name.length > 20) {
      $scope.errors.push('Input should be less then 20 characters long')
    }
    else {
      sessionFactory.login($scope.user)
      $scope.user = {}  // clear input
    }
  }
})
