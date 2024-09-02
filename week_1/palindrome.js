// Задача: Палиндром

// Условие:
// Напиши функцию, которая проверяет, является ли данная строка палиндромом (читается одинаково и вперед, и назад).

const str = 'abba';
const str2 = 'boo';

function palindrome (string){
    const reversedStr = string.split('').reverse().join('');
    
    return string === reversedStr;
}

// function palindrome (string){
//     const word = string.split('')
//     let reversedStr = '';
//     for (let i = string.length - 1; i >= 0; i--) {
//         reversedStr += string[i];
//     }
    
//     return string === reversedStr;
// }

console.log(palindrome(str)) // true
console.log(palindrome(str2)) // false
