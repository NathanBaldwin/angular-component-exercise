(function() {
  'use strict'

  app.component('done', {
    bindings: {
      studentList: '=',
      search: '='
    },
    controller: 'doneCtrl',
    templateUrl: 'app/templates/done.html'
  })

})()
