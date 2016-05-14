(function() {
  'use strict'

  app.controller('inProgressCtrl',
    function($scope) {
      $scope.studentList = this.studentList
      console.log("student list from sub component:", $scope.studentList)

      $scope.inComplete = function(student) {
        student.status = 1
      }

      $scope.isComplete = function(student) {
        student.status = 3
      }
    })
  
})()
