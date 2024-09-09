// Задача: Обработка данных из нескольких API с зависимостями
// Условие:
// Напиши функцию getFullUserData, которая принимает ID пользователя и выполняет несколько API-запросов для получения и объединения данных из различных источников. Ваша задача — собрать полную информацию о пользователе, включая его данные, посты и комментарии к этим постам.
// Получи информацию о пользователе с API https://jsonplaceholder.typicode.com/users/{id}.
// На основе полученного ID пользователя получи его посты с API https://jsonplaceholder.typicode.com/posts?userId={id}.
// Для каждого поста получи комментарии с API https://jsonplaceholder.typicode.com/comments?postId={postId}.
// Собери все данные в следующую структуру:



async function getFullUserData(userId) {
    const errors = {
        userError: null,
        postsError: null,
        commentsErrors: []
    };

    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!userResponse.ok) {
            throw new Error(`HTTP error! status: ${userResponse.status}`);
        }
        const userData = await userResponse.json();

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
        if (!postsResponse.ok) {
            throw new Error(`HTTP error! status: ${postsResponse.status}`);
        }
        const postsData = await postsResponse.json();

        const postsWithCommentsPromises = postsData.map(async post => {
            try {
                const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
                if (!commentsResponse.ok) {
                    throw new Error(`HTTP error! status: ${commentsResponse.status}`);
                }
                const commentsData = await commentsResponse.json();
                return {
                    post,
                    comments: commentsData
                };
            } catch (error) {
                errors.commentsErrors.push({ postId: post.id, error: error.message });
                return {
                    post,
                    comments: []
                };
            }
        });

         const postsWithCommentsResults = await Promise.allSettled(postsWithCommentsPromises);

         const postsWithComments = postsWithCommentsResults.map(result => {
             if (result.status === 'fulfilled') {
                 return result.value;
             } else {
                 errors.commentsErrors.push({ postId: result.reason.postId, error: result.reason.message });
                 return {
                     post: result.reason.post,
                     comments: []
                 };
             }
         });

        return {
            user: userData,
            posts: postsWithComments,
            errors
        };
    } catch (error) {
        errors.userError = error.message;
        return {
            user: null,
            posts: [],
            errors
        };
    }
}

getFullUserData(1).then(data => console.log(data));
