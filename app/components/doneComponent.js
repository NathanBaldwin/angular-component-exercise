(function() {
  'use strict'

  app.component('done', {
    bindings: {
      studentList: '='
    },
    controller: 'doneCtrl',
    templateUrl: 'app/templates/done.html'
  })

})()
