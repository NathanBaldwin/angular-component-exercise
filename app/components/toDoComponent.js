(function() {
  'use strict'

  app.component('toDo', {
    bindings: {
      studentList: '='
    },
    controller: 'toDoCtrl',
    templateUrl: 'app/templates/toDo.html'
  })

})()
