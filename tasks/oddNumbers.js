// Задача: Нечетные числа

// Условие:
// Напиши функцию, которая принимает массив чисел и возвращает новый массив содержащий только нечетные числа

const numbers = [2, 12, 46, 35, 16, 5, 1];

function getOdd(nums){
   let newNum = nums.filter(num => num % 2)
   return newNum
}

const getOdd2 = (nums) => nums.filter(num => num % 2)

console.log(getOdd(numbers)) // [35, 5, 1]