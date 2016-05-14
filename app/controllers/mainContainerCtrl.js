(function() {
  'use strict'

  app.controller('mainContainerCtrl',
    function($scope, studentList) {
      $scope.test = 123
      $scope.studentList = studentList
      console.log("$scope.studentList", $scope.studentList)
    })
})()
