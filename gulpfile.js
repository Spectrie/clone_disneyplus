const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss')/* essa função apenas recupera os arquivos, nesse caso os arquivos são todos com a extensão scss dentro desse caminho de pastas */
        .pipe(sass({outputStyle: 'compressed'}))/*essa função encadeada comprime os arquivos de saida scss para ganho de peformace */
        .pipe(gulp.dest('./dist/css')); /*essa função envia os arquivos css já comprimidos para uma pasta de destino*/
}

function images(){
    return gulp.src('./src/images/**/*',{encoding:false})
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles,images, scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))/*essa função observa os arquivos listados nesse caminho e executa a função no array toda vez que há uma mudança em algum arquivo do caminho*/
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}