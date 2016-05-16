(function() {
  'use strict'
  app.factory('sortFactory', [
    function() {

    return {
      sortAlphabetically: function(a, b) {
        var nameA = a.last.toUpperCase();
        var nameB = b.last.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      },

      findIndexToSplice: function(currentStudentList, newLastName) {
        for (var i=0; i <currentStudentList.length; i++) {
          var currentLastName = currentStudentList[i].last
          if (newLastName.toUpperCase() <= currentLastName.toUpperCase()) {
            return i
            break
          }
        }
      }

    }
  }])
})()
