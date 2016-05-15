(function() {
  'use strict'

  app.component('toDo', {
    bindings: {
      studentList: '=',
      search: '@'
    },
    controller: 'toDoCtrl',
    templateUrl: 'app/templates/toDo.html'
  })

})()
