const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

function html() {
  return src('src/*.html')
    .pipe(dest('build/'))
}

function css() {
  return src('src/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('build/'))
}

watch(['src/*',], function (cb) {
  html();
  css();
  cb();
});


exports.html = html;
exports.css = css;
exports.default = parallel(html, css);