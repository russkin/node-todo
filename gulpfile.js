var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyHTML = require('gulp-minify-html');
var config = {
	src : {
		dest : 'dest/client',
		client : {
			js : 'public/**/*.js',
			html : 'public/**/*.html'
		},
		test : 'spec/test/*Spec.js'
	}
};

gulp.task('default', ['test', 'build', 'watch']);

gulp.task('test', function () {
	return gulp.src(config.src.test)
		.pipe(jasmine());
});

gulp.task('build', ['minify-html', 'minify-js']);

gulp.task('minify-js', function() {
	gulp.src(config.src.client.js)
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(config.src.dest));
});

 
gulp.task('minify-html', function() {
	var opts = {
		conditionals: true,
		spare:true
	};
			  
	return gulp.src(config.src.client.html)
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest(config.src.dest));
});

gulp.task('watch', function() {
	gulp.watch(config.src.test, ['test']);
	gulp.watch(config.src.client.js, ['minify-js']);
	gulp.watch(config.src.client.html, ['minify-html']);
});
