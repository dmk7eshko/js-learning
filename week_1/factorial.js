// Условие:
// Напиши функцию, которая вычисляет факториал заданного числа

// ** Задачу можно решить итеративно (с помощью цикла) и рекурсивно
// *** Приветствуется 2 решения


function factorial(num){
    let number = 1;
    for(let i = 1; i <= num; i++){
        number *= i;
    }
    return number;
}


/* Рекурсивный способ */

function factorial(num){
    if(num === 1){
        return num;
    } else {
        return factorial(num - 1) * num;
    }
}



console.log(factorial(5)) // 120