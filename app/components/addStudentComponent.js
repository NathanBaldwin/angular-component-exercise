(function() {
  'use strict'

  app.component('addStudent', {
    bindings: {
      studentList: '=',
      search: '=',
    },
    controller: 'addStudentCtrl',
    templateUrl: 'app/templates/addStudent.html'
  })

})()
