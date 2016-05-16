(function() {
  'use strict'

  app.controller('toDoCtrl',
    function($scope) {

      $scope.isInProgress = function(student) {
        student.status++
      }

      $scope.isComplete = function(student) {
        student.status = 3
      }
    })
  
})()
