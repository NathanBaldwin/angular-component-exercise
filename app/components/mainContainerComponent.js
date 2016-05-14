(function() {
  'use strict'

  app.component('mainContainer', {
    controller: function($scope, studentList) {
      $scope.test = 123
      $scope.studentList = studentList
      console.log("$scope.studentList", $scope.studentList);
    },
    templateUrl: 'app/templates/mainContainer.html'
  })

  app.component('firstSubComponent', {
    templateUrl: 'app/templates/subTemp1.html'
  })

})()


