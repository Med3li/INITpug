//***********Start Gulp****
var gulp = require('gulp');

//your first task
gulp.task('medali', function() {
   return gulp.src('*.*')
        .pipe(gulp.dest('dist'))
});