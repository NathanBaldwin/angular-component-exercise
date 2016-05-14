(function() {
  'use strict'

  app.controller('toDoCtrl',
    function($scope) {
      $scope.studentList = this.studentList
      console.log("student list from sub component:", $scope.studentList)

      $scope.inProgress = function(student) {
        student.status++
      }
    })
  
})()
