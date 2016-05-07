var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function(){
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build'))
});

gulp.task('default', ["babel"]);
