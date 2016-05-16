(function() {
  'use strict'

  app.controller('mainContainerCtrl',
    function($scope, studentList, sortFactory) {

      $scope.studentList = studentList.sort(sortFactory.sortAlphabetically)
      $scope.showAddStudentModal = function() {
        $("#addStudentModal").modal('show')
      }
    })

})()
