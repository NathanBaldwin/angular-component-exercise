(function() {
  'use strict'

  app.controller('addStudentCtrl',
    function($scope) {
      $scope.studentList = this.studentList
      console.log("add student form", $scope.studentList)

      $scope.addStudent = function() {
        console.log("you clicked add student");
        console.log("radio:", typeof $scope.status);
        var newStudent = {
          first: $scope.firstName,
          last: $scope.lastName,
          status: $scope.status
        }

        $scope.studentList.push(newStudent)
        console.log($scope.studentList);
      }

    })
  
})()
