var path = require('path');
var Dgeni = require('dgeni');

module.exports = function (grunt) {
  grunt.registerTask('dgeni', 'Generate docs via dgeni.', function () {
    var done = this.async();
    console.log(process.cwd());
    var dgeni = new Dgeni([require(path.join(process.cwd(), 'docsModules/ngDocsBuilder'))]);
    dgeni.generate().then(function (docs) {
      console.log(docs);
    });
  });
};
