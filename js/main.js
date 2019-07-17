/*//////Start Gulp
var gulp = require('gulp');

 //your first task
gulp.task('medali', function() {
   return gulp.src('*.*')
        .pipe(gulp.dest('dist'))
});
//240
var header = document.querySelector('.header');
var intro = document.querySelector('.header__intro');
//var oldStyle = style.cssText='transform="skew(8deg)";
//var newStyle = style.cssText='transform="skew(0deg)";
window.onscroll = function() {
	console.log(window.pageYOffset);

	if(window.pageYOffset > '120'){
		header.style.transform="skewY(8deg)";
		intro.style.transform="skewY(-8deg)";
	} else {
		header.style.transform="skewY(0deg)";
		intro.style.transform="skewY(0deg)";

	}
};*/