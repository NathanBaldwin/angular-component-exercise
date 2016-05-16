(function() {
  'use strict'

  app.component('inProgress', {
    bindings: {
      studentList: '=',
      search: '='
    },
    controller: 'inProgressCtrl',
    templateUrl: 'app/templates/inProgress.html'
  })

})()
