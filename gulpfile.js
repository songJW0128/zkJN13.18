var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    return gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
})

gulp.task('server', function() {
    return gulp.src('src')
        .pipe(webserver({
            port: 6699,
            open: true,
            livereload: true
        }))
})

gulp.task('default', gulp.series('sass', 'server', 'watch'))




gulp.task('coycss', function() {
    return gulp.src('./src/css/**/*.css')
        .pipe(clean())
        .pipe(gulp.dest('./bulid/css'))
})
gulp.task('coyjs', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./bulid/js'))
})
gulp.task('watchs', gulp.series('coycss', 'coyjs'))