(function() {
  'use strict'

  app.component('inProgress', {
    bindings: {
      studentList: '='
    },
    controller: 'inProgressCtrl',
    templateUrl: 'app/templates/inProgress.html'
  })

})()
