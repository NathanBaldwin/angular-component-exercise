(function() {
  'use strict'

  app.controller('mainContainerCtrl',
    function($scope, studentList) {
      $scope.studentList = studentList
      $scope.showAddStudentModal = function() {
        $("#addStudentModal").modal('show')
      }
    })
  
})()
