/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

*/

'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: Boolean(false)
}

personalMovieDB.count = numberOfFilms


if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель")
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка")
}



for (let i = 1; i <= 2; i++) {
    const nameOfMovie = prompt("Один из последних просмотренных фильмов?", ""),
        ratingOfMovie = prompt("На сколько оцените его?", "")

    if (nameOfMovie != null && ratingOfMovie != null && nameOfMovie != '' && ratingOfMovie != '' && nameOfMovie.length <= 50) {
        personalMovieDB.movies[nameOfMovie] = ratingOfMovie
    } else {
        console.log("Ошибка..")
        i--
    }
}

console.log("Вы успешно прошли опрос")
console.log(personalMovieDB)