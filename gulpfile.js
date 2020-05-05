const gulp = require('gulp');
const pug = require('pug');

gulp.task('pug', () => {
  gulp.src('src/pages/**/*.pug')
  .pipe(pug({
    pretty: '\t'
  }))
  .pipe(gulp.dest('dist'))
});

gulp.task( "img", () => {
    return src(`src/images/content/**/*`)
    .pipe(dest(`dist/images/content/`))
  }
)

gulp.task('watch', () => {
  gulp.watch('src/pages/**/*.pug', ['pug'], 'img')
});