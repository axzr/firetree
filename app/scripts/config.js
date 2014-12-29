'use strict';

angular.module('firetreeApp')

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider.state('main', {
    url: '/',
    templateUrl: '/views/main.html',
    controller: 'MainController'
  }).state('firebasename', {
    url: '/:firebasename',
    templateUrl: '/views/subkeys.html',
    controller: 'MainController'
  }).state('depth1', {
    url: '/:firebasename/:id1',
    templateUrl: '/views/ready.html',
    controller: 'MainController'
  }).state('depth2', {
    url: '/:firebasename/:id1/:id2',
    templateUrl: '/views/ready.html',
    controller: 'MainController'
  });

  $urlRouterProvider.otherwise('/');
})

.run(function($rootScope) {
  $rootScope.__env = __env;
  $rootScope.isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
});