'use strict';

/**
 * @ngdoc function
 * @name neoAngularBasicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the neoAngularBasicApp
 */
neoAngularBasicApp.controller('MainCtrl', [
   '$rootScope',
   '$scope',
   'ngProgressFactory',
   function($rootScope, $scope, ngProgressFactory) {

     var v = this;

     const init = function() {
       console.log('Hi');
       $scope.progressBar = ngProgressFactory.createInstance();
       $scope.progressBar.setColor('#099FFF');
       $scope.progressBar.setHeight('2px');
     };

     $rootScope.$on('$routeChangeStart', function(angularEvent, next, current) {
       $scope.progressBar.start();
     });

     $rootScope.$on('$routeChangeSuccess', function(angularEvent, current, previous) {
       $scope.progressBar.complete();
     });

     init();

   }
 ]);
