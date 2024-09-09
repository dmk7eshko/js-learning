// Задача: Сумма чисел
// Условие: Напиши функцию sumNumbers которая принимает массив чисел и возвращает их сумму. Реши двумя способами:
// с помощью цикла for
// с помощью метода массива reduce

const nums = [1, 2, 3, 4, 5];

// function sumNumbers(nums){
//     let sum = 0;

//     for(num of nums){
//         sum += num;
//     }
//     return sum;
// }
 

function sumNumbers(numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumNumbers(nums)); // 15
