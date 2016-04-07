
module.exports = function(mod) {

  console.log('Module A');

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
  mod.directive('component', function () {
    return {
      restrict: 'AE',
      template: '<p>Hello Component!</p>'
    };
  });

};