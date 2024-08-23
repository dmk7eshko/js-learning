// Задача: Поиск наибольшего

// Условие:
// Напиши функцию findMax, которая возвращает максимальное число в массиве.


const numbers = [2, 12, 46, 35, 16, 5, 1];

function findMax(arr) {
   let max = arr[0];
   for (let i = 0; i < arr.length; i++) {
       if (arr[i] > max) {
           max = arr[i];
       }
   }
   return max;
}

function findMax2(arr) {
  return Math.max(...arr)
}

console.log(findMax(numbers)); // 46
