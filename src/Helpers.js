export const fetchArticles = (id) => {
    return fetch(`https://newsapi.org/v2/everything?sources=${id}&apiKey=915e84ad7aab4593a83262df5ab2f455`)
    .then(resp => resp.json())
    .then(data => data)
};

export const fetchTopArticles = () => {
    return fetch(`https://newsapi.org/v2/top-headlines?language=en&apiKey=915e84ad7aab4593a83262df5ab2f455`)
    .then(resp => resp.json())
    .then(data => data)
};


export const fetchSources = () => {
    return fetch(`https://newsapi.org/v2/sources?language=en&apiKey=915e84ad7aab4593a83262df5ab2f455`)
    .then(resp => resp.json())
    .then(data => data)
};

export const searchArticles = (query) => {
    return fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=915e84ad7aab4593a83262df5ab2f455`)
    .then(resp => resp.json())
    .then(data => data)
};
