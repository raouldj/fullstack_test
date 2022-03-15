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
