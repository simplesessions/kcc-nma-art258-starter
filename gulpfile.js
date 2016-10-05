const browserSync = require('browser-sync')
const gulp        = require('gulp')
const concat      = require('gulp-concat')
const sass        = require('gulp-sass')
const stylelint   = require('gulp-stylelint')
const gutil       = require('gulp-util')
const fatalLevel  = require('yargs').argv.fatal

/*********************
 * Error Handling (ref. https://gist.github.com/noahmiller/61699ad1b0a7cc65ae2d)
 *********************/

global.isWatching = false

// Command line option:
//  --fatal=[warning|error|off]
const ERROR_LEVELS = ['error', 'warning']

// Handle an error based on its severity level.
// Log all levels, and exit the process for fatal levels.
// ref. http://stackoverflow.com/questions/21602332/catching-gulp-mocha-errors#answers
function handleError(level, error) {
  gutil.log(error.message)
  if (global.isWatching) {
    this.emit('end')
  } else {
    process.exit(1)
  }
}

// Convenience handler for error-level errors.
function onError(error) { return handleError.call(this, 'error', error) }
// Convenience handler for warning-level errors.
function onWarning(error) { return handleError.call(this, 'warning', error) }

// compile sass
gulp.task('sass', ['stylelint'], () => {
    return gulp.src('src/**/*.scss').
        pipe(sass().on('error', onError)).
        pipe(concat('style.css')).
        pipe(gulp.dest('')).
        pipe(browserSync.reload({ stream: true }))
})

// turn on the CSS linter
gulp.task('stylelint', () => {
    return gulp.src('src/**/*.scss').
        pipe(stylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }))
})

// run browser-sync
gulp.task('sync', () => {
    browserSync.init('', {
        server: {
            baseDir: ''
        }
    })
})

// copy over your HTML files
gulp.task('html', () => {
    return gulp.src('src/**/*.html').
        pipe(gulp.dest('')).
        pipe(browserSync.reload({ stream: true }))
})

// copy over all your images
gulp.task('images', () => {
    return gulp.src('src/images/**/*.{gif,jpg,png}').
        pipe(gulp.dest('images/')).
        pipe(browserSync.reload({ stream: true }))
})

// build everything
gulp.task('build', ['sass', 'html', 'images'])

// start watching all your files
gulp.task('watch', ['build', 'sync'], () => {
    global.isWatching = true

    gulp.watch('src/scss/**/*.scss', ['sass'])
    gulp.watch('src/**/*.html', ['html'])
    gulp.watch('src/images/**/*.{gif,jpg,png}', ['images'])
})

gulp.task('default', ['watch'])
