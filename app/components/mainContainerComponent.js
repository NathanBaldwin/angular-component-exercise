(function() {
  'use strict'

  app.component('mainContainer', {
    controller: 'mainContainerCtrl',
    templateUrl: 'app/templates/mainContainer.html'
  })

  app.component('firstSubComponent', {
    bindings: {
      studentList: '='
    },
    controller: function($scope) {
      $scope.studentList = this.studentList
      console.log("student list from sub component:", $scope.studentList);
    },
    templateUrl: 'app/templates/subTemp1.html'
  })

})()


