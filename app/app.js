var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('home', {
      url: '/multi-component-app',
      views: {
        '': {
          template: '<main-container></main-container>' //mainContainer component
        }
      }
    })

  $urlRouterProvider.otherwise('/multi-component-app');
});
