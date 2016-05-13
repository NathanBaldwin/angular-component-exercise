var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  .state('home', {
      url: '/multi-component-app',
      views: {
        '': {
          templateUrl: 'app/templates/mainContainer.html'
        }
      }
    })

  $urlRouterProvider.otherwise('/multi-component-app');
});
