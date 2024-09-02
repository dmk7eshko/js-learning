// Задача: Task Manager**
// Создай функцию createTaskManager, которая возвращает объект для управления задачами. Объект должен иметь следующие методы:
// addTask(name) — добавляет новую задачу с именем name в список задач.
// completeTask(name) — помечает задачу с именем name как выполненную.
// getPendingTasks() — возвращает массив всех невыполненных задач.
// getCompletedTasks() — возвращает массив всех выполненных задач.
// Используй замыкание для хранения состояния задач.




const manager = createTaskManager();

function createTaskManager() {
    const tasks = [];

    return {
        addTask(name) {
            tasks.push({ name, completed: false });
        },
        completeTask(name) {
            const task = tasks.find(task => task.name === name);
            if (task) {
                task.completed = true;
            }
        },
        getPendingTasks() {
            return tasks.filter(task => !task.completed).map(task => task.name);
        },
        getCompletedTasks() {
            return tasks.filter(task => task.completed).map(task => task.name);
        }
    };
}




manager.addTask('Learn JavaScript');
manager.addTask('Write Blog Post');
console.log(manager.getPendingTasks()); // ["Learn JavaScript", "Write Blog Post"]

manager.completeTask('Learn JavaScript');
console.log(manager.getCompletedTasks()); // ["Learn JavaScript"]
console.log(manager.getPendingTasks()); // ["Write Blog Post"]
