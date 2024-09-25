let soldier = {
    healthy: 500, 
    armor: 100,
    angry: function () {
        console.log("Твой папаша-гнида служил во Вьетнаме?!")
    }
}

let john = {
    healthy: 200,
    seyYes: function () {
        console.log("Есть! Да, Сэр!")
    }
}
// let john = Object.create(soldier);
Object.setPrototypeOf(john, soldier);
console.log(john.angry()); // Твой папаша-гнида служил во Вьетнаме?!

