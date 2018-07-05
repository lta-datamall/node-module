const gulp = require('gulp');
const pump = require('pump');
const path = require('path');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const rm = require('gulp-rm');

const srcRoot = path.resolve('./src');
const tsSrcGlob = path.resolve(srcRoot, '**/*.ts');
const distRoot = path.resolve('./dist')

const tsOptions = {
    "allowJs": false,
    "alwaysStrict": true,
    "moduleResolution": "node",
    "noImplicitAny": true,
    "target": "es5",
    "removeComments": true,
    "strict": true
};

const sourcemapsOptions = '.';

gulp.task('clean', cb => {
    pump([
        gulp.src(distRoot, { read: false }),
        rm()
        ],
        cb
    );
});

gulp.task('build', ['clean'], cb => {
    pump([
        gulp.src(tsSrcGlob),
        sourcemaps.init(),
        typescript(tsOptions),
        uglify(),
        sourcemaps.write(sourcemapsOptions),
        gulp.dest(distRoot)
        ],
        cb
    );
});