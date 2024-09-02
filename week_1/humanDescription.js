// Задача: Описание человека
// Условие: Напиши функцию describePerson, которая принимает объект с информацией о человеке и возвращает строку с описанием этого человека. Объект будет иметь свойства name (строка), age (число) и isStudent (логическое значение).


const person = {
    name: 'Alice',
    age: 25,
    isStudent: true,
  };
  
  const describePerson = () => (`${person.name} is ${person.age} years old and is a ${person.isStudent ? 'is a student' : 'not a student'}.`);


  // function describePerson(person){
  //     return(`${person.name} is ${person.age} years old and is a ${person.isStudent ? 'is a student' : 'not a student'}.`);
  // }
  


  //------ Деструктуризация ------ //

// const person = {
//     name: 'Alice',
//     age: 25,
//     isStudent: true,
//   };
  
//   function describePerson({name, age, isStudent}){
//       return(`${name} is ${age} years old and is a ${isStudent ? 'is a student' : 'not a student'}.`);
//   }
  
   console.log(describePerson(person)); // "Alice is 25 years old and is a student."