"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("gulp-autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var run = require("run-sequence");
var del = require("del");
var server = require("browser-sync").create();
var cache = require('gulp-cache'); // Подключаем библиотеку кеширования

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }),
            mqpacker({ sort: true }))
    .pipe(gulp.dest("build/source/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/source/css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  return gulp.src("build/source/img/**/*.{png,jpg,gif}")
    .pipe(cache(imagemin([
        imagemin.optipng({optimizationLevel: 10}),
        imagemin.jpegtran({progressive: true})
    ])))
    .pipe(gulp.dest("build/source/img"));
}); 

gulp.task("serve", function() {
  server.init({
    server: "build/source",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("copy", function() {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/libs/**",
    "source/*.php",
    "source/*.png",
    "source/css/normalize.css",
    "source/*html"],
                  {base: "."})
    .pipe(gulp.dest("build"));             
});

gulp.task("clean", function() {
  return del("build");
});

gulp.task("build", function(fn) {
  run("clean", "copy", "style", "images", fn);
});

gulp.task('clear', function() {
    return cache.clearAll();
})
