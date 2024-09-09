// Задача: Студенты и учители**
// Создай базовый класс Person (Человек), который будет иметь свойства name (имя) и age (возраст), а также метод introduce(), который выводит строку вида "Hello, my name is [name] and I am [age] years old.".
// Создай два класса, наследующихся от Person:
// Student (Студент) - добавьте свойство school (школа) и метод introduce(), который дополнительно выводит информацию о школе.
// Teacher (Учитель) - добавьте свойство subject (предмет) и метод introduce(), который дополнительно выводит информацию о предмете.
// Создай экземпляры обоих классов и вызовите их метод introduce().

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

        introduce(){
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
}

class Student extends Person{
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }

    introduce() {
        return `${super.introduce()} I am studying at ${this.school}.`;
    }
}

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        return `${super.introduce()} I teach ${this.subject}.`;
    }
}


const student = new Student('Alice', 20, 'Harvard University');
console.log(student.introduce()); // "Hello, my name is Alice and I am 20 years old. I am a student at Harvard University."

const teacher = new Teacher('Bob', 45, 'Mathematics');
console.log(teacher.introduce()); // "Hello, my name is Bob and I am 45 years old. I teach Mathematics."
