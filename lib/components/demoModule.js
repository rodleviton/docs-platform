

import 'angular/http';

module.exports = function(mod) {

  /**
   * @ngdoc directive
   * @name demo.component
   * @function
   *
   * @description
   * This is a demo component
   * 
   * @usage
   * ```html
   * <!-- using attribute directives -->
   * <components>Hello World!</components>
   * ```
   * @example 
   * <component>Hello World!</component>
   */
  angular.module('x.y').directive('component', function () {
    return {
      restrict: 'AE',
      template: '<p>Hello Component!</p>'
    };
  });

};



angular.module('x.y', [])
  .config(function() {
      require('.modA')
      require('.modA')
   })
  .directive('myDirA', require('modADir'))
