export const articlesSelector = (state) => {
  const { articles, articlesApi } = state.articles;
  if (typeof articlesApi.inProgress === 'undefined'
    || articlesApi.inProgress === true
    || articlesApi.error !== null
  ) {
    return null;
  }
  return articles;
};

export const articleSelector = (state) => {
  const { article, articleApi } = state.articles;
  if (typeof articleApi.inProgress === 'undefined'
    || articleApi.inProgress === true
    || articleApi.error !== null
  ) {
    return null;
  }
  return article;
}
