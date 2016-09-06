const browserSync = require('browser-sync')
const gulp        = require('gulp')
const concat      = require('gulp-concat')
const sass        = require('gulp-sass')

// compile sass
gulp.task('sass', () => {
    return gulp.src('src/**/*.scss').
        pipe(sass()).
        pipe(concat('style.css')).
        pipe(gulp.dest('')).
        pipe(browserSync.reload({ stream: true }))
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
    gulp.watch('src/scss/**/*.scss', ['sass'])
    gulp.watch('src/**/*.html', ['html'])
    gulp.watch('src/images/**/*.{gif,jpg,png}', ['images'])
})

gulp.task('default', ['watch'])
