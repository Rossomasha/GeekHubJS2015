var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var notify = require("gulp-notify");
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('default', ['build']);

gulp.task('build', ['less_to_css', 'concat_css', 'min_css', 'es6_to_es5', 'to_browserify', 'concat_js', 'min_js']);

gulp.task('less_to_css', function () {
    // Конвертация из less в css
    gulp.src('./less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('concat_css', function () {
    //Объединение в один файл весь css
    gulp.src('./css/*.css')
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest('./css/'));
});

gulp.task('min_css', function () {
    //Минифицирование CSS
    gulp.src('./css/main.css')
        .pipe(minifyCss("main_min.css"))
        .pipe(gulp.dest('./css/minify/'))
        .pipe(notify("CSS operations Done!"));
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('es6_to_es5', function () {
    //Преобразует ec6 в es5
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('js/ES5/'));
});


gulp.task('to_browserify', function() {
    //Позволяет подключать JS к JS
    gulp.src('./js/ES5/*.js')
        .pipe(browserify())
        .pipe(gulp.dest('./js/ES5/browserify/'));
});

gulp.task('concat_js', function () {
    //Объединение в один файл весь js
    gulp.src('./js/ES5/browserify/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js/minify/'));
});

gulp.task('min_js', function () {
    //Минифицирование js
    gulp.src('js/minify/all.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./js/minify/'))
        .pipe(notify("JS operations Done!"));
});

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

gulp.task('watch', function(){
    gulp.watch('js/*.js',['es6_to_es5', 'to_browserify', 'concat_js', 'min_js']);
    gulp.watch('less/*.less',['less_to_css', 'concat_css', 'min_css']);
});