// Задача: Обработка данных из нескольких API с зависимостями
// Условие:
// Напиши функцию getFullUserData, которая принимает ID пользователя и выполняет несколько API-запросов для получения и объединения данных из различных источников. Ваша задача — собрать полную информацию о пользователе, включая его данные, посты и комментарии к этим постам.
// Получи информацию о пользователе с API https://jsonplaceholder.typicode.com/users/{id}.
// На основе полученного ID пользователя получи его посты с API https://jsonplaceholder.typicode.com/posts?userId={id}.
// Для каждого поста получи комментарии с API https://jsonplaceholder.typicode.com/comments?postId={postId}.
// Собери все данные в следующую структуру:



function getFullUserData(userId) {
    return new Promise((resolve) => {
        const errors = {
            userError: null,
            postsError: null,
            commentsErrors: []
        };

        // Получаем данные о пользователе
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(userData => {
                // Получаем посты пользователя
                return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(postsData => {
                        // Получаем комментарии для каждого поста
                        const commentsPromises = postsData.map(post => {
                            return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                                .then(response => {
                                    if (!response.ok) {
                                        throw new Error(`HTTP error! status: ${response.status}`);
                                    }
                                    return response.json()
                                        .then(commentsData => ({
                                            post,
                                            comments: commentsData
                                        }));
                                })
                                .catch(error => {
                                    errors.commentsErrors.push({ postId: post.id, error: error.message });
                                    return {
                                        post,
                                        comments: []
                                    };
                                });
                        });

                        return Promise.all(commentsPromises)
                            .then(postsWithComments => ({
                                user: userData,
                                posts: postsWithComments,
                                errors
                            }));
                    })
                    .catch(error => {
                        errors.postsError = error.message;
                        return {
                            user: userData,
                            posts: [],
                            errors
                        };
                    });
            })
            .catch(error => {
                errors.userError = error.message;
                resolve({
                    user: null,
                    posts: [],
                    errors
                });
            })
            .then(result => resolve(result)); // Возвращаем результат в любом случае
    });
}

// Пример использования
getFullUserData(1).then(data => console.log(data));