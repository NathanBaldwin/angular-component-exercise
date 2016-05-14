(function() {
  'use strict'

  app.controller('doneCtrl',
    function($scope) {
      $scope.studentList = this.studentList
      console.log("this is the done controller", $scope.studentList)


      $scope.isInComplete = function(student) {
        student.status = 1
        console.log("student:", student);
      }
      
      $scope.isInProgress = function(student) {
        student.status = 2
        console.log("you clicked IN PROGRESS");
      }
    })
  
})()
