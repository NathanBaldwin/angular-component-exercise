(function() {
  'use strict'

  app.controller('addStudentCtrl',
    function($scope, sortFactory) {

      var studentList = this.studentList

      $scope.addStudent = function() {
        var newStudent = {
          first: $scope.firstName,
          last: $scope.lastName,
          status: $scope.status
        }

        // Add student to master list in correct, alphabetical order:
        var indexToSplice = sortFactory.findIndexToSplice(studentList, newStudent.last)
        studentList.splice(indexToSplice, 0, newStudent)
        
        //clear form:
        $scope.firstName = ''
        $scope.lastName = ''
        $scope.status = false
      }

    })
  
})()
