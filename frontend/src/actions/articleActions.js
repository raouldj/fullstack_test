import articleConstants from "../constants/articleConstants";

export const actionGetArticle = (id) => (dispatch) => {
  dispatch({
    type: articleConstants.GET_ARTICLE_REQUEST,
    payload: {
      inProgress: true,
      error: null,
    },
  });

  return new Promise((resolve, reject) => {
    let responseOk;
    fetch(
      `http://localhost:3001/articles/${id}`,
      { credentials: 'same-origin' },
    )
      .then((response) => {
        responseOk = response.ok;
        return response.json();
      })
      .then((response) => {
        if (!responseOk) {
          dispatch({
            type: articleConstants.GET_ARTICLE_FAILURE,
            payload: `Unable to fetch article: ${id}`,
          });
          reject(new Error(`Unable to fetch article: ${id}`));
          return;
        }
        dispatch({
          type: articleConstants.GET_ARTICLE_SUCCESS,
          payload: response,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: articleConstants.GET_ARTICLE_FAILURE,
          payload: {
            error,
          },
        });
        reject(new Error('System error'));
      });
  });
}

export const actionGetArticles = () => (dispatch) => {
  dispatch({
    type: articleConstants.GET_ARTICLES_REQUEST,
    payload: {
      inProgress: true,
      error: null,
    },
  });

  return new Promise((resolve, reject) => {
    let responseOk;
    fetch(
      'http://localhost:3001/articles',
      { credentials: 'same-origin' },
    )
      .then((response) => {
        responseOk = response.ok;
        return response.json();
      })
      .then((response) => {
        if (!responseOk) {
          dispatch({
            type: articleConstants.GET_ARTICLES_FAILURE,
            payload: 'Unable to fetch articles',
          });
          reject(new Error('Unable to fetch articles'));
          return;
        }
        dispatch({
          type: articleConstants.GET_ARTICLES_SUCCESS,
          payload: response,
        });
        resolve();
      })
      .catch((error) => {
        dispatch({
          type: articleConstants.GET_ARTICLES_FAILURE,
          payload: {
            error,
          },
        });
        reject(new Error('System error'));
      });
  });
};
