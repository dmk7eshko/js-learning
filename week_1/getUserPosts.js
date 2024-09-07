// Задача: Создание цепочки промисов
// Условие:
// Напиши функцию getUserPosts, которая принимает ID пользователя и возвращает массив его постов, полученных из двух различных API-запросов:
// Сначала получаем информацию о пользователе по его ID с API https://jsonplaceholder.typicode.com/users/{id}.
// Затем, используя полученный ID, получить посты пользователя с API https://jsonplaceholder.typicode.com/posts?userId={id}.
// Требования:
// Используй fetch для выполнения запросов.
// Обработай возможные ошибки с помощью catch.

async function getUserPosts(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) {
            throw new Error(`Ошибка при получении данных пользователя: ${userResponse.statusText}`);
        }
        const user = await userResponse.json();

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        if (!postsResponse.ok) {
            throw new Error(`Ошибка при получении постов пользователя: ${postsResponse.statusText}`);
        }
        const posts = await postsResponse.json();

        return posts;
    } catch (error) {
        console.error('Ошибка:', error);
        return [];
    }
}

getUserPosts(1).then(posts => console.log(posts));