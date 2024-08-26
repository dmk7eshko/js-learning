// Задача: Проверка числа
// Условие: Напиши функцию checkNumber которая принимает число и возвращает строку:
// "Positive" если число больше 0
// "Negative" если число меньше 0
// "Zero" если число равно 0


const yourNumber = 0;

function checkNumber(num) {
    const inputNumber = prompt('input ur number', yourNumber);
    if(inputNumber > 0){
        alert('Positive');
        console.log('Positive');
    } else if(inputNumber == 0){
        alert('Zero');
        console.log('Zero');
    }else if(inputNumber < 0){
        alert('Negative');
        console.log('Negative');
    } else{
        alert('Plz input only number');
        console.log('Plz input only number');
    }
    return num
}

//   console.log(checkNumber(10)); // "Positive"
//   console.log(checkNumber(-5)); // "Negative"
//   console.log(checkNumber(0)); // "Zero"