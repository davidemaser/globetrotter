/**
 * Created by David Maser on 03/05/2017.
 */
/**
 * Created by David Maser on 13/04/2017.
 */
let gulp = require('gulp');
let sass = require('gulp-sass');
let jsdoc = require('gulp-jsdoc3');
let git = require('gulp-git');

let input = './src/stylesheets/Main.scss';
let output = './src/stylesheets/css';

let sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed' //nested, expanded, compact, compressed
};

gulp.task('sass', () => {
    return gulp
    // Find all `.scss` files from the `stylesheets/` folder
        .src(input)
        // Run Sass on those files
        .pipe(sass(sassOptions))
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});

gulp.task('doc',(cb) => {
    gulp.src(['./src/**/*.js','./src/components/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});

gulp.task('watch', () => {
    return gulp
        .watch(input,['sass'])
        .on('change', (event) => {
            console.log('file '+event.path)
        })
});

gulp.task('default', ['sass','watch']);