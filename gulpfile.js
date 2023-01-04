//aqui escreveremos as tarefas gulp
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function compilasass(){
    return gulp.src('./styles/*.scss')
}





function teste(){
    console.log('Olá mundo via gulp ')
}

function soma(callback){
    console.log('função soma pelo gulp');
    callback();
}


exports.default = gulp.series(teste,soma);
exports.soma = soma 