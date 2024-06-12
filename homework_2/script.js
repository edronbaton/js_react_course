// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        let languages = ''
        
        plan.skills.languages.forEach((item) => {
            if (languages == '') {
                languages += item.toUpperCase()
            } else {
                languages += ` ${item.toUpperCase()}`
            }
            
        })
        
        console.log(languages)
        
        return `Мне ${plan.age} и я владею языками: ${languages}`
    }
};

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

function showExperience(plan) {
    return plan.skills.exp
}

function showProgrammingLangs(plan) {
    let result = ''
    
    for (let key in plan.skills.programmingLangs) {
        result += `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`
    }
    
    if (result === '') {
        return result
    }
    
    return result
}


// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде. 

function showAgeAndLangs(plan) {
    let languages = ''
    
    plan.skills.languages.forEach((item) => {
        if (languages == '') {
            languages += item.toUpperCase()
        } else {
            languages += ` ${item.toUpperCase()}`
        }
        
    })
    
    console.log(languages)
    
    return `Мне ${plan.age} и я владею языками: ${languages}`
}


// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let familyString = ''

    if (arr.length == 0) {
        return "Семья пуста"
    } else {}
        arr.forEach((item) => {
            familyString == '' ? familyString += `${item}` : familyString += ` ${item}`
        })

    return `Семья состоит из: ${familyString}`
}

// Напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

//     lisbon
//     rome
//     milan
//     dublin

// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((item) => {
        console.log(item.toLowerCase())
    })
}


// Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

//     const someString = 'This is some strange string';

// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== "string") {
        return "Ошибка!"
    } else {
        return str.split("").reverse().join('')
    }
}

// Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

//     const baseCurrencies = ['USD', 'EUR'];
//     const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

//     availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')

// Вернет строку:

//     Доступные валюты:
//     UAH
//     RUB

// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let availableCurr = 'Доступные валюты:\n',
        unvailableCurr = 'Нет доступных валют'

    arr.forEach((item) => {
        if (item !== missingCurr) {
            availableCurr += `${item}\n`
        } else {
            unvailableCurr += `${item}`
        }
    })

    return availableCurr
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"))