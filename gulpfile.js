/*var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var sass = require('gup-sass');
*/
var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    prefix     = require('gulp-autoprefixer'),
    sass       = require('gulp-sass'),
    pug        = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    notify     = require('gulp-notify');
/*
//my first task
gulp.task('CSSconcat',function() {

return gulp.src(['dist/css/*.css'])
        .pipe(prefix())
        .pipe(concat('polyfills.css'))
        .pipe(gulp.dest(['dist/css']))  //destribution
});
//my second task
gulp.task('transfert',function() {

return gulp.src(['js/*.js'])
        .pipe(gulp.dest('dist/js'))  //destribution
});
//my 3th task
gulp.task('JSconcat',function() {

return gulp.src(['js/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest(['dist']))  //destribution
});
//my 4th task
gulp.task('sass',function() {

return gulp.src([''])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(['dist/css']))  //destribution
       
});
//my 5th task
gulp.task('AllCssprefixer',function() {

return gulp.src('dist')
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('dist'))  //destribution
});
*/
//my 6th task
gulp.task('copy', function(){
   // require('./server.js');
   return gulp.src(['*.extension', '!ignored file source'])//extension = js/css/pug
     .pipe(gulp.dest('dist'))
     .pipe(livereload());
});
//*********my 7h task
gulp.task('sasstocss',function() {

//require('./server.js');
return gulp.src('sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(prefix('last 2 versions'))
        .pipe(concat('main.css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))  //destribution
        .pipe(notify("SASS task is done!"))
        .pipe(livereload());
});
//*********my 8th task
gulp.task('pugtohtml',function() {

//require('./server.js');
return gulp.src('index.pug')
     .pipe(pug({pretty:true})) //{pretty:true}: for pretty code
     .pipe(gulp.dest('dist'))
     .pipe(notify("HTML task is done!"))
     .pipe(livereload());
});
//**********my 9th task
gulp.task('jsminify',function() {

//require('./server.js');
return gulp.src('dist/js/main.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))  //destribution
        .pipe(notify("JS minify is done !"))
        .pipe(livereload());
});
//my 10th task
gulp.task('watch', function(){
      require('./server.js')
      livereload.listen()
      gulp.watch('js/*.js', gulp.series('jsminify'))
      gulp.watch('*.pug', gulp.series('pugtohtml'))
      gulp.watch('sass/*.scss', gulp.series('sasstocss'));
});
//Default task
gulp.task('default', gulp.series('watch'));