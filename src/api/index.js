export const getNewsTopHeadlines = async () => {
    const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_TOKEN_NEWS}`, { cache: "no-store" });
    return newsData.json();
};

export const getNewsSearch = async (keyword) => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${API_TOKEN_NEWS}&q=${keyword}&pageSize=30`, { cache: "no-store" });
    return newsData.json();
};

export const API_TOKEN_NEWS = 'ca6d84f2579242eeb62c46936435d78b'