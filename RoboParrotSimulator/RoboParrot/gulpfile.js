// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');

// JS hint task
gulp.task('jshint', function() {
  gulp.src(['./src/scripts/parrot.js', './src/scripts/parrot3d.js'])
    .pipe(jshint({esversion: 6}))
    .pipe(jshint.reporter('default'));
});

var changed = require('gulp-changed');
var cleanDest = require('gulp-clean-dest');

// include plug-ins
var minifyHTML = require('gulp-minify-html');

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './src/html/*.html',
      htmlDst = './public';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    //.pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// include plug-ins
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./src/scripts/input.js', './src/scripts/commandspanel.js'])
    //.pipe(concat('script.js'))
    //.pipe(stripDebug())
    //.pipe(uglify())
    .pipe(gulp.dest('./public/'));
});


// include plug-ins
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./src/styles/*.css'])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});


var babel = require('gulp-babel');
 
gulp.task('babel', function() {
    gulp.src(['./src/scripts/parrot3d.js', './src/scripts/MathLib.js', './src/scripts/parrot.js'])
      .pipe(babel({
            presets: ['es2015']
        }))
	  //.pipe(cleanDest('out'))
      .pipe(gulp.dest('./public/'));
});

var beautify = require('gulp-beautify');
 
gulp.task('beautify', function() {
  gulp.src(['./public/parrot.js'])
    .pipe(beautify({indentSize: 2}))
    .pipe(gulp.dest('./public/'))
});


// default gulp task
gulp.task('default', ['jshint', 'htmlpage', 'scripts', 'babel'], function() {
});