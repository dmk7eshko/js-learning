// Задача: Массив чисел Фибоначчи*
// Условие:
// Напишите функцию generateFibonacciSeries, которая принимает число n и возвращает массив первых n чисел Фибоначчи.


function generateFibonacciSeries(num){
    let prev = 1;
    let curr = 0;
    let res = [];

    for (let i = 2; i <= num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
        res.push(next);
    }
    return res;
}


console.log(generateFibonacciSeries(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
