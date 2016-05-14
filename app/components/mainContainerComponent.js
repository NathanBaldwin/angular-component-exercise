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
    controller: 'toDoCtrl',
    templateUrl: 'app/templates/toDo.html'
  })

})()


