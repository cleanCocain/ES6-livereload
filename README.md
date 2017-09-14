# ES6-livereload

Project Initialization:

1. create a folder, inside the folder open the console and run 'npm init' to create the package.json file.

2. Installing gulp:

     ` npm install --save-dev gulp`
     
3. Creating the 'gulpfile.js'.

   *Inside the folder create the gulp file "gulpfile.js".
   
`var gulp = require('gulp');
 
gulp.task('build', function () {
 
});
 
gulp.task('watch', ['build'], function () {
    gulp.watch('./src/js/*.js', ['build']);
});
 
gulp.task('default', ['build', 'watch']);`



How to run:

1. copy all the files inside the folder and paste it inside apache server directory.
   (if you want you can create a your own Virtual Host for Apache server)

2. inside the directory, open the console and run 'gulp' in order to run the gulp file.

3. To do the livereload changes you need to install the Google chrome plugin (Google chrome).

   https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

4. Open chrome and in 'localhost' run your file.

5. make sure, after installing google chrome livereload plugin the the icon will appear on the toolbar. 
   we have to enable bofore try doing changes.
