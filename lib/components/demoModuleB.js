'use strict';

var mod = angular.module('demo', []);

/**
 * @ngdoc directive
 * @name demo.componentA
 * @function
 *
 * @description
 * This is a demo component
 *
 * @example 
 * <component-a>Hello World!</component-a>
 */
mod.directive('componentA', function () {
  return {
    restrict: 'AE',
    template: '<p>Hello Component A!</p>'
  };
});

export default mod.name;
