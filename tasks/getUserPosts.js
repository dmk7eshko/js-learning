// Задача: Создание цепочки промисов
// Условие:
// Напиши функцию getUserPosts, которая принимает ID пользователя и возвращает массив его постов, полученных из двух различных API-запросов:
// Сначала получаем информацию о пользователе по его ID с API https://jsonplaceholder.typicode.com/users/{id}.
// Затем, используя полученный ID, получить посты пользователя с API https://jsonplaceholder.typicode.com/posts?userId={id}.
// Требования:
// Используй fetch для выполнения запросов.
// Обработай возможные ошибки с помощью catch.


function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(userData => {
                return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(postsData => {
                resolve(postsData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                resolve(null);
            });
    });
}


// Пример использования
getUserPosts(1).then(posts => console.log(posts));