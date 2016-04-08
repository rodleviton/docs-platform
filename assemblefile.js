var path = require('path');
var Dgeni = require('dgeni');
var assemble = require('assemble');
var del = require('del');
var handlebars = require('engine-handlebars')
var prettify = require('gulp-prettify');
var extname = require('gulp-extname');
var app = assemble();

// Set rendering engine to handlebars 
app.engine('hbs', handlebars);

// Create a components collection
app.create('components');

// Auto link navigation
app.helper('autolink', function (context) {
  var base = context.data.root;
  return base.title + base.ext;
});

app.task('load', function (cb) {
  app.layouts('templates/layouts/*.hbs');
  app.components(['tmp/**/*.html', 'tmp/**/*.hbs']);
  cb();
});

app.task('dgeni', function (cb) {
  var dgeni = new Dgeni([require(path.join(process.cwd(), 'docsModule/ngDocsBuilder'))]);

  dgeni.generate().then(function (docs) {
    setTimeout(function () {
      cb();
    }, 100); // Allow just enought time for files to be written
  });
});

app.task('generate:docs', function () {
  return app.toStream('components')
    .on('error', console.log)
    .pipe(app.renderFile())
    .on('error', console.log)
    .pipe(extname())
    .pipe(prettify({
      indent_size: 2,
      indent_inner_html: true,
      unformatted: ['pre', 'code']
    }))
    .pipe(app.dest('dist/'));
});

app.task('clean', function () {
  return del(['tmp']);
});

app.task('default', ['dgeni', 'load', 'generate:docs', 'clean']);

module.exports = app;
