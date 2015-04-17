var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default');

gulp.task('test', function () {
	return gulp.src('spec/test/*Spec.js')
		.pipe(jasmine());
});

gulp.watch('spec/test/*Spec.js', ['test']);
