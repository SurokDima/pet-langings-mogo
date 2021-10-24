const gulp          = require('gulp');
const sass          = require('gulp-sass')( require('sass') );
const sourcemaps    = require('gulp-sourcemaps');
const watch         = require('gulp-watch');


// .scss files compilation task
gulp.task('sass-compile', function () {
    return gulp.src('./src/**/*.scss')
    .pipe( sourcemaps.init() )
    .pipe( sass().on('error', sass.logError) )
    .pipe( sourcemaps.write('./') )
    .pipe( gulp.dest('./assets/css/') );
});

// Watcher for .scss files
gulp.task('watch', function() {
    gulp.watch('./assets/**/*.scss', gulp.series('sass-compile') );
});