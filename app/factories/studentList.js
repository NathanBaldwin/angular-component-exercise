(function() {
  'use strict'
  app.factory('studentList', [
    function() {

      var students = [
        {
          first: "John",
          last: "Smith",
          status: 1
        },
        {
          first: "Jane",
          last: "Doe",
          status: 2
        },
        {
          first: "Nathan",
          last: "Baldwin",
          status: 2
        },
        {
          first: "Brian",
          last: "Hiatt",
          status: 3
        },
        {
          first: "Michael",
          last: "Jordan",
          status: 1
        },
        {
          first: "Matt",
          last: "Damon",
          status: 1
        },
        {
          first: "Kobe",
          last: "Bryant",
          status: 2
        },
        {
          first: "Albert",
          last: "Pujols",
          status: 3
        },
        {
          first: "Tom",
          last: "Brady",
          status: 2
        },
        {
          first: "Tim",
          last: "Tebow",
          status: 1
        }
      ]

    return students


    }
  ])
})()
