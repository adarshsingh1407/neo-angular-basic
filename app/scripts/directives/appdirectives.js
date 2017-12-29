'use strict';

/**
 * @ngdoc directive
 * @name neoAngularBasicApp.directive:appDirectives
 * @description
 * # appDirectives
 */
neoAngularBasicApp.directive('footer', function () {
return {
  restrict: 'EA',
  templateUrl: 'views/directive/footer.html'
};
})
.directive('header', function () {
return {
  restrict: 'EA',
  templateUrl: 'views/directive/header.html'
};
});
