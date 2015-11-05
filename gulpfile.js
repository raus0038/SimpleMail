var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('default', ['concatenate']);

gulp.task('concatenate', function() {
  return gulp.src('public/stylesheets/modules/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('concatenate:watch', function () {
  gulp.watch('public/stylesheets/modules/*.css', ['concatenate']);
});
