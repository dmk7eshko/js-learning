// Задача: Promise.all и работа с массивом промисов
// Условие:
// Напиши функцию fetchDataFromUrls, которая принимает массив URL-адресов и возвращает массив данных, полученных с каждого из этих URL-адресов. Если хотя бы один из запросов завершится с ошибкой, функция должна возвращать null.
// Требования:
// Используй Promise.all для обработки массива промисов.
// В случае ошибки любой из промисов, используй catch для обработки и возвращай null.


function fetchDataFromUrls(urls) {
    return new Promise((resolve) => {
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }));

        Promise.all(fetchPromises)
            .then(data => resolve(data))
            .catch(error => {
                console.error('Error fetching data:', error);
                resolve(null);
            });
    });
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

fetchDataFromUrls(urls).then(data => console.log(data));

