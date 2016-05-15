(function() {
  'use strict'

  app.controller('addStudentCtrl', ['$scope',
    function($scope) {
      $scope.studentList = this.studentList
  

      $scope.addStudent = function() {
        var newStudent = {
          first: $scope.firstName,
          last: $scope.lastName,
          status: $scope.status
        }

        //clear form
        $scope.studentList.push(newStudent)
        $scope.firstName = ''
        $scope.lastName = ''
        $scope.status = false
      }

    }])
  
})()
