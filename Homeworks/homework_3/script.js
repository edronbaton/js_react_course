// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0,
        volume = 0;

    shoppingMallData.shops.forEach((item) => {
        square += item.width * item.length
    });

    volume += data.height * square

    if ((data.budget - (volume * shoppingMallData.moneyPer1m3)) >= 0) {
        return 'Бюджета недостаточно';
    } else {
        return 'Бюджета достаточно';
    }

}

console.log(isBudgetEnough(shoppingMallData))

// У вас есть список учеников, которые хотят поиграть в игру:

//     const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

//     [
//       [ 'Andrew', 'Ann', 'Bernard' ],
//       [ 'Cris', 'Josh', 'Mark' ],
//       [ 'Peter', 'Sam', 'Sandra' ],
//       'Оставшиеся студенты: Takesi'
//     ]

// Если убрать одного студента из списка, то результат будет:

//     [
//       [ 'Andrew', 'Ann', 'Bernard' ],
//       [ 'Cris', 'Josh', 'Mark' ],
//       [ 'Peter', 'Sam', 'Sandra' ],
//       'Оставшиеся студенты: -'
//     ]

// А если добавить одного, то:

//     [
//       [ 'Andrew', 'Ann', 'Bernard' ],
//       [ 'Cris', 'Josh', 'Mark' ],
//       [ 'Peter', 'Sam', 'Sandra' ],
//       'Оставшиеся студенты: Takesi, Somebody'
//     ]

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sandra'];

function sortStudentsByGroups(arr) {
    let pairs = [];
        rest = ''

    for (let i = 3; i <= arr.length++; i+=3) {
        let group = [arr[i-3], arr[i-2], arr[i-1]]
        
        if (group.includes(undefined)) {
            group.forEach((item) => {
                if (item !== undefined) {
                    if (rest == '') {
                        rest += `${item}`
                    } else {
                        rest += ` ${item}`
                    }   
                    
                }
            })
        } else {
            pairs.push(group)
        }
    } 

    if (rest == '') {
        rest += `Оставшиеся студенты: -`
    } else {
        rest = `Оставшиеся студенты: ${rest.split(" ").join(", ")}`
    }

}

sortStudentsByGroups(students)
