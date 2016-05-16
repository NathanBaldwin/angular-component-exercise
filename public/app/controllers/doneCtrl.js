(function() {
  'use strict'

  app.controller('doneCtrl',
    function($scope) {

      $scope.isInComplete = function(student) {
        student.status = 1
      }
      
      $scope.isInProgress = function(student) {
        student.status = 2
      }
    })
  
})()
