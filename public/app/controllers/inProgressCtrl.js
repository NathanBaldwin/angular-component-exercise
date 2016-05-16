(function() {
  'use strict'

  app.controller('inProgressCtrl',
    function($scope) {

      $scope.notComplete = function(student) {
        student.status = 1
      }

      $scope.isComplete = function(student) {
        student.status = 3
      }
    })
  
})()
