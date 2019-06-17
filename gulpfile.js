var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    minify = require('gulp-clean-css'),
    del = require('gulp-clean');
//my 5th task
gulp.task('create-polyfill-file', function() {
    return gulp
        .src(['style/*.*css', '!style/bootstrap- v3.3.7.css', '!style/main.scss'])
        .pipe(concat('polyfills.css'))
        .pipe(minify({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("polyfill task is done!"))
        .pipe(livereload());

});
//my 6th task
gulp.task('css-copy', function() {
   
    // require('./server.js');
    return gulp
        .src(['style/bootstrap- v3.3.7.css']) //extension = js/css/pug
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("css-copy task is done!"));
});
//my 6th task
gulp.task('js-copy', function() {
   
    // require('./server.js');
    return gulp
        .src(['js/*.js', '!js/main.js']) //extension = js/css/pug
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("js-copy task is done!"));
});
//*********my 11th task
gulp.task('delete', function() {

    //require('./server.js');
    return gulp
        .src(['dist/css/bootstrap-rtl.css', 'dist/js/main.js'])
        .pipe(del({ force: true }))
        .pipe(notify("Delete task is done!"));
});
//*********my 7th task
gulp.task('sasstocss', function() {

    //require('./server.js');
    return gulp
        .src(['style/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(concat('main.min.css'))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(prefix('last 2 versions'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css')) //destribution
        .pipe(notify("SASS task is done!"))
        .pipe(livereload());
});
//*********my 8th task
gulp.task('pugtohtml', function() {

    //require('./server.js');
    return gulp
        .src('pug js/*.pug')
        .pipe(pug({ pretty: true })) //{pretty:true}: for pretty code
        .pipe(gulp.dest('dist'))
        .pipe(notify("HTML task is done!"))
        .pipe(livereload());
});
//**********my 9th task
gulp.task('jsminify', function() {

    //require('./server.js');
    return gulp
        .src(['js/main.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js')) //destribution
        .pipe(notify("JS minify is done !"))
        .pipe(livereload());
});
//my 10th task
gulp.task('watch', function() {
    require('./server.js')
    livereload.listen()
    gulp.watch('js/*.js', gulp.series('jsminify'))
    gulp.watch('pug js/*.pug', gulp.series('pugtohtml'))
    gulp.watch(['style/main.scss', 'style/bootstrap-rtl.css'], gulp.series('create-polyfill-file')) // not used yet
    gulp.watch('style/main.scss', gulp.series('css-copy'))
    gulp.watch('js/*.js', gulp.series('js-copy'))
    gulp.watch('style/main.scss', gulp.series('sasstocss'));
});
//Default task
gulp.task('default', gulp.parallel('watch')); //gulp.series was here!