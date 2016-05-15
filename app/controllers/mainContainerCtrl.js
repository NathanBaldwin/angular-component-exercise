(function() {
  'use strict'

  app.controller('mainContainerCtrl',
    function($scope, studentList) {
      $scope.apply = function() {
        console.log("you changed!");

      }
      // $scope.search = 'test text'
      $scope.studentList = studentList
      console.log("$scope.studentList", $scope.studentList)
    })
})()
