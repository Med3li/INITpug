var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    prefix     = require('gulp-autoprefixer'),
    sass       = require('gulp-sass'),
    pug        = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    notify     = require('gulp-notify'),
    minify     = require('gulp-clean-css');
//my 5th task
gulp.task('create-polyfill-file', function(){
return gulp.src(['css/*.css', '!css/bootstrap- v3.3.7.css'])
  .pipe(concat('polyfills.css'))
  .pipe(minify({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css'))
  .pipe(notify("polyfill task is done!"));
});
//my 6th task
gulp.task('copy', function(){
   // require('./server.js');
   return gulp.src(['css/bootstrap- v3.3.7.css'])//extension = js/css/pug
     .pipe(gulp.dest('dist'))
     .pipe(notify("copying files task is done!"));
});
//*********my 7h task
gulp.task('sasstocss',function() {

//require('./server.js');
return gulp.src(['sass/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.css'))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))  //destribution
        .pipe(notify("SASS task is done!"))
        .pipe(livereload());
});
//*********my 8th task
gulp.task('pugtohtml',function() {

//require('./server.js');
return gulp.src('pug js/*.pug')
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
      gulp.watch('pug js/*.pug', gulp.series('pugtohtml'))
      gulp.watch(['css/*.css', '!bootstrap-v3.3.7.css'], gulp.series('create-polyfill-file'))
      gulp.watch(['css/bootstrap- v3.3.7.css'], gulp.series('copy'))
      gulp.watch(['sass/*.scss'], gulp.series('sasstocss'));
});
//Default task
gulp.task('default', gulp.series('watch'));