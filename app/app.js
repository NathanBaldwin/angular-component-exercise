var app = angular.module("app", ['ui.router', 'angular.filter']);

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
