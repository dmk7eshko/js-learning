// Задача: Проверка числа
// Условие: Напиши функцию checkNumber которая принимает число и возвращает строку:
// "Positive" если число больше 0
// "Negative" если число меньше 0
// "Zero" если число равно 0


function checkNumber(num) {
    if(num > 0){
        return 'Positive';
    } else if(num == 0){
        return 'Zero';
    }else if(num < 0){
        return 'Negative';
    } else{
        return 'Plz input only number';
    }
}

  console.log(checkNumber(10)); // "Positive"
  console.log(checkNumber(-5)); // "Negative"
  console.log(checkNumber(0)); // "Zero"