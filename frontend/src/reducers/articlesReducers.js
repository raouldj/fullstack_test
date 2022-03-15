import articleConstants from '../constants/articleConstants';
import {combineReducers} from "redux";

const articlesReducer = (state = {}, action) => {
  if (action.type === articleConstants.GET_ARTICLES_SUCCESS) {
    return action.payload;
  }
  return state;
};

const articlesApiReducer = (state = {}, action) => {
  switch (action.type) {
    case articleConstants.GET_ARTICLES_REQUEST:
      return {
        inProgress: true,
        error: null,
      };
    case articleConstants.GET_ARTICLES_SUCCESS:
      return {
        inProgress: false,
        error: null,
      };
    case articleConstants.GET_ARTICLES_FAILURE:
      return {
        inProgress: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const articleReducer = (state = {}, action) => {
  if (action.type === articleConstants.GET_ARTICLE_SUCCESS) {
    return action.payload;
  }
  return state;
};

const articleApiReducer = (state = {}, action) => {
  switch (action.type) {
    case articleConstants.GET_ARTICLE_REQUEST:
      return {
        inProgress: true,
        error: null,
        method: 'GET',
      };
    case articleConstants.GET_ARTICLE_SUCCESS:
      return {
        inProgress: false,
        error: null,
        method: 'GET',
      };
    case articleConstants.GET_ARTICLE_FAILURE:
      return {
        inProgress: false,
        error: action.payload,
        method: 'GET',
      };
    default:
      return state;
  }
};

const articlesReducers = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  articlesApi: articlesApiReducer,
  articleApi: articleApiReducer,
});

export default articlesReducers;
