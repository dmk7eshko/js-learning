// Условие:
// Напиши функцию, которая принимает массив чисел и возвращает объект, где ключами будут уникальные числа из массива, а значениями — количество их появлений в этом массиве.

const numbers = [1, 2, 1, 2, 3, 3, 4, 3, 4, 4, 4, 3, 2, 4];

function countElements(arr) {
let elementCount = {};
 for (let num of arr) {
   if (elementCount[num]) {
     elementCount[num]++;
   } else {
     elementCount[num] = 1;tas
   }
 }
 return elementCount
}


const count = countElements(numbers);
console.log('count', count); // {1: 2, 2: 3, 3: 4, 4: 5}