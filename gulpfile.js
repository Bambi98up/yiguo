const gulp = require('gulp');
const watch = require('gulp-watch'); //监听事件
const minhtml = require('gulp-minify-html');//引入html的压缩插件
const mincss = require('gulp-minify-css');//引入css的压缩插件
const imgmin = require('gulp-imagemin')
const core = require('babel-core');
const uglify=require('gulp-uglify')
const babel = require('gulp-babel');
const es2015=require('babel-preset-es2015')

//压缩html
gulp.task('uglifyhtml', () => {
    return gulp.src('src/*.html')//引入文件
        .pipe(minhtml())//执行压缩插件
        .pipe(gulp.dest('dist/'));//输出
});


//压缩css
gulp.task('uglifycss', function () {
    return gulp.src('src/css/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('uglifypng', () => {
    return gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imgmin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('dist/img'));
});

//es6转es5并压缩*****
//gulp-babel gulp-core  babel-preset-es2015
gulp.task('babeljs', () => {
    return gulp.src('src/script/js/*.js')//引入文件
        .pipe(babel({
            presets: ['es2015']
        }))//执行压缩插件
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));//输出
});


gulp.task('default', function () {//default:默认名称，编译时可以省略
    watch(['src/*.html','src/css/*.css','src/img/*.{png,jpg,gif,ico}','src/script/js/*.js'], gulp.parallel('uglifyhtml','uglifycss','uglifypng','babeljs'));
});