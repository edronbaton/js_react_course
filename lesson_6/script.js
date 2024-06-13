/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';
let numberOfFilms;



let personalMovieDB = {
    count: function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
 
        return numberOfFilms
    },
    movies: {},
    actors: {},
    genres: [],
    privat: Boolean(false),
    start: function () {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        return numberOfFilms
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log("Доступ к db разрешен")
        } else {
            console.log("Доступ к db запрещен!")
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}:`, "");

            if (favouriteGenre == '' || favouriteGenre == null) {
                i--
            } else {
                personalMovieDB.genres.push(favouriteGenre)
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1}: - это ${item}`)
        })
    },

    detectPersonalLevel: function () {
        let count = personalMovieDB.count()

        if (count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (count > 10 && count < 30) {
            console.log("Вы классический зритель")
        } else if (count > 30) {
            console.log("Вы киноман")
        } else {
            console.log("Произошла ошибка")
        }
    },

    rememberMyFilms: function () {
        for (let i = 1; i <= 2; i++) {
            const nameOfMovie = prompt("Один из последних просмотренных фильмов?", "").trim(),
                ratingOfMovie = prompt("На сколько оцените его?", "").trim()
        
            if (nameOfMovie != null && ratingOfMovie != null && nameOfMovie != '' && ratingOfMovie != '' && nameOfMovie.length <= 50) {
                personalMovieDB.movies[nameOfMovie] = ratingOfMovie
            } else {
                console.log("Ошибка..")
                i--
            }
        }
        console.log("Вы успешно прошли опрос")
    },

    toggleVisibleMyDB: function (privat) {
        if (privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
        
    }


}

personalMovieDB.start()
personalMovieDB.writeYourGenres()
personalMovieDB.rememberMyFilms()
personalMovieDB.detectPersonalLevel()
personalMovieDB.showMyDB(personalMovieDB.privat)
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat)
personalMovieDB.showMyDB(personalMovieDB.privat)
