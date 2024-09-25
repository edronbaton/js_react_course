// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

function getTimeFromMinutes(time) {
    if (typeof time != "number" || !Number.isInteger(time) || time <= 0) {
        return "Ошибка, проверьте данные"
    } else {
        let minutes = time % 60,
            hours = parseInt(time / 60)
        
        let hoursString = ''

        if (hours == 1) {
            hoursString += "час"
        } else if (hours > 1) {
            hoursString += "часа"
        } else {
            hoursString += "часов"
        }

        return `Это ${hours} ${hoursString} и ${minutes} минут`
    }
}

console.log(getTimeFromMinutes(60))

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(num_1, num_2, num_3, num_4) {
    let arrow = [num_1, num_2, num_3, num_4]

    arrow.forEach((item) => {
        if (typeof item != "number") {
            return 0
        }
    })

    return Math.max(num_1, num_2, num_3, num_4)
}

console.log(findMaxNumber(1, 3, 2, 90))

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"

function fib(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num <= 0 ) {
        return ""
    }

    let result = "",
        firstNumber = 0,
        secondNumber = 1
    
        for (let i = 0; i < num; i++) {
            if (i + 1 === num) {
                result += `${firstNumber}`
            } else {
                result += `${firstNumber} `
            }

            let thirdNumber = firstNumber + secondNumber
            firstNumber = secondNumber
            secondNumber = thirdNumber
        }

    return result        
    
}

console.log(fib(4))