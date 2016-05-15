(function() {
  'use strict'

  app.component('addStudent', {
    bindings: {
      studentList: '=',
      search: '=',
      test: '='
    },
    // require: '^mainContainerCtrl',
    
    controller: 'addStudentCtrl',
    templateUrl: 'app/templates/addStudent.html'
  })

})()
