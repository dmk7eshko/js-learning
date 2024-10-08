// Задача: Фибоначчи

// Условие:
// Напиши функцию, которая вычисляет последовательность Фибоначчи 

// ** Задачу можно решить итеративно (с помощью цикла) и рекурсивно
// *** Приветствуется 2 решения


function fibonacci(num){
    let prev = 1;
    let curr = 0;
    for (let i = 2; i <= num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

/* Рекурсивный способ */

function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}



console.log(fibonacci(5)) // 5
console.log(fibonacci(10)); // 55
