(function() {
  'use strict'

  app.component('addStudent', {
    bindings: {
      studentList: '='
    },
    controller: 'addStudentCtrl',
    templateUrl: 'app/templates/addStudent.html'
  })

})()
