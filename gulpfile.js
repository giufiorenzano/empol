const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const rtlcss = require("gulp-rtlcss");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const clean = require("gulp-clean");

gulp.task("clean", () =>
  gulp
    .src(["public/assets/*", "build/*"], {read: false})
    .pipe(clean())
);

gulp.task("components", () =>
  gulp.src([
    "src/**/*.scss",
    "!src/themes/**/*.scss",
  ])
  .pipe(concat("_components.scss"))
  .pipe(gulp.dest("src/themes"))
  .pipe(browserSync.stream())
);

/*-----------------------------------------------
|   SCSS
-----------------------------------------------*/
gulp.task("scss", () =>
  gulp
    .src("src/themes/*.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ compatibility: "ie9" }))
    .pipe(sourcemaps.write("."))
    .pipe(plumber.stop())
    .pipe(gulp.dest("public/assets/css"))
    .pipe(browserSync.stream())
);


/*-----------------------------------------------
|   Watching
-----------------------------------------------*/
gulp.task("watch", () => {
  gulp.watch(["src/**/*.scss", "!src/themes/_components.scss"], gulp.series("clean", "components", "scss"));
});


gulp.task("default", gulp.series("clean", "components", "scss"));
