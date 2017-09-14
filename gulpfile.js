var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');

gulp.task('build', function () {
    return browserify({ entries: './src/js/app.js', debug: true })
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(livereload());
});

gulp.task('watch', ['build'], function () {
    livereload.listen(1234);
    gulp.watch('./src/js/*.js', ['build']);
    gulp.watch('css/*.scss', ['compile_css']);
    gulp.watch('css/*.css', function(file){
       livereload.changed(file)
   });
});

gulp.task('compile_css',function(){
    gulp.src('css/*.scss')
    
        .pipe(compass({
            config_file: 'config.rb',
            css: 'css',
            sass: 'css'
        }))
    
        .pipe(gulp.dest('css'))
        .pipe(sftp(sftp_config));
    });
    
gulp.task('default', ['build', 'watch']);
