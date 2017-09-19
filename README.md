# ES6-livereload

## How to run:

1. copy all the files inside the folder and paste it inside apache server directory.
   (if you want you can create a your own Virtual Host for Apache server)
   
2. install following tools.

       ````npm install --save-dev gulp
           npm install --save-dev babelify babel-preset-es2015 browserify vinyl-source-stream
           npm install --save-dev vinyl-buffer gulp-uglify
           npm install --save-dev gulp-sourcemaps gulp-livereload````


3. inside the directory, open the console and run 'gulp' in order to run the gulp file.

4. To do the livereload changes you need to install the Google chrome plugin (Google chrome).

   https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en
   
   or adding the
   
   `<script src="//localhost:35729/livereload.js?snipver=1"></script>`
   
   to the **index.html** file (already added)

5. Open chrome and in 'localhost' run your file.

6. If you are using Google chrome plugin,make sure chrome livereload plugin icon appear on the toolbar is enabled. 
  ** we have to enable before try doing changes. **
   
  
   
   

## Project Initialization:

1. create a folder, inside the folder open the console and run 'npm init' to create the package.json file.

2. Installing gulp:

     ` npm install --save-dev gulp`
     
3. Creating the 'gulpfile.js'.

   - Inside the folder create the gulp file "gulpfile.js".
   
     ```Ruby
     var gulp = require('gulp');
     gulp.task('build', function () {
     });
     gulp.task('watch', ['build'], function () {
     gulp.watch('./src/js/*.js', ['build']);
     });
     gulp.task('default', ['build', 'watch']);
     ```
     
4. Implementing babel and browerify

     `npm install --save-dev babelify babel-preset-es2015 browserify vinyl-source-stream`
     
     update the 'gulpfile.js'
     
     ```Ruby
     var gulp        = require('gulp');
     var browserify  = require('browserify');
     var babelify    = require('babelify');
     var source      = require('vinyl-source-stream');
 
     gulp.task('build', function () {
       return browserify({entries: './src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/js'));
     });
 
     gulp.task('watch', ['build'], function () {
      gulp.watch('./src/js/*.js', ['build']);
     });
 
     gulp.task('default', ['build', 'watch']);
     ```
  
5. Adding Uglify, Source map and Livereload

     `npm install --save-dev vinyl-buffer gulp-uglify`
     
     `npm install --save-dev gulp-sourcemaps gulp-livereload`


     update the 'gulpfile.js'
     
     ```Ruby
     var gulp        = require('gulp');
     var browserify  = require('browserify');
     var babelify    = require('babelify');
     var source      = require('vinyl-source-stream');
     var buffer      = require('vinyl-buffer');
     var uglify      = require('gulp-uglify');
     var sourcemaps  = require('gulp-sourcemaps');
     var livereload  = require('gulp-livereload');
 
     gulp.task('build', function () {
        return browserify({entries: './src/js/app.js', debug: true})
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/js'));
        .pipe(livereload());
     });
 
     gulp.task('watch', ['build'], function () {
       livereload.listen();
       gulp.watch('./src/js/*.js', ['build']);
     });
 
     gulp.task('default', ['build', 'watch']);
     ```
     
6. All set with our gulp file configuration:
   create your html file and add the reference JavaScript file in the dist folder.
     (add the path of the converted JavaScript in the folder dist, to the html file created)
     
       `    <script src="./dist/js/app.js"></script>`
       
7. Adding Livereload automation: The watcher part (gulp task "watch") listens for file changes and sends notification to the    LiveReload server (running by default at port 35729).   

   add the
   
    `<script src="//localhost:1234/livereload.js?snipver=1"></script>`
    
    to your html file.
    
    
    - changing the port of gulp-livereload.
         **inside the 'gulpfile.js' there is a gulp task for livereload process. there we can define our port**
         
          ```
          gulp.task('watch', ['build'], function () {
          livereload.listen();
          gulp.watch('./src/js/*.js', ['build']);
          });```
     
      
     inside `livereload.listen();` we cange the port to `livereload.listen(1234);`
     
     
## The folder structure

```````````````
root folder
       |_____src
       |       |____js
       |             |___**your .js files**
       |
       |_____dist
       |       |____js
       |             |____maps
       |             |      |____reference Javascript files
       |             |
       |             |____ **converted .js files**
       |
       |_____index.html
       |_____gulpfile.js
       |_____package.json
```````````````
