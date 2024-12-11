export const removeDuplicateData = (articles) => {
    const randomArticle = articles.articles;
    const filterArticles = randomArticle.filter(article => article.source.id !== null);
    return filterArticles;
};
