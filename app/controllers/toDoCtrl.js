(function() {
  'use strict'

  app.controller('toDoCtrl',
    function($scope) {
      $scope.studentList = this.studentList
      console.log("student list from sub component:", $scope.studentList)

      $scope.isInProgress = function(student) {
        student.status++
      }

      $scope.isComplete = function(student) {
        student.status = 3
      }
    })
  
})()