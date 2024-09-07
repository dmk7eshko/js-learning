// Задача: Обработка данных из нескольких API с зависимостями
// Условие:
// Напиши функцию getFullUserData, которая принимает ID пользователя и выполняет несколько API-запросов для получения и объединения данных из различных источников. Ваша задача — собрать полную информацию о пользователе, включая его данные, посты и комментарии к этим постам.
// Получи информацию о пользователе с API https://jsonplaceholder.typicode.com/users/{id}.
// На основе полученного ID пользователя получи его посты с API https://jsonplaceholder.typicode.com/posts?userId={id}.
// Для каждого поста получи комментарии с API https://jsonplaceholder.typicode.com/comments?postId={postId}.
// Собери все данные в следующую структуру:


async function fetchDataFromUrls(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }));

        const data = await Promise.all(fetchPromises);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchDataFromUrls(urls).then(data => console.log(data));
