// Задача: Средний возраст
// Условие: Напиши функцию getAverageAge которая принимает массив объектов, где каждый объект представляет собой человека с полем age (возраст). Функция должна возвращать средний возраст всех людей.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

function getAverageAge(people) {
    let result = 0;

    for (let i = 0; i < people.length; i++) { // выведет 0, затем 1, затем 2
        result += people[i].age;
  }

  return Math.round(result / people.length);
}


// function getAverageAge(people) {
//     const totalAge = people.reduce((sum, person) => sum + person.age, 0);

//     return Math.round(totalAge / people.length);
// }


console.log(getAverageAge(people)); // 30
