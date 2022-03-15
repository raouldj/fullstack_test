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

const articleApiReducer = (state = {}, action) => {
  return state;
};

const articlesReducers = combineReducers({
  articles: articlesReducer,
  articlesApi: articlesApiReducer,
  articleApi: articleApiReducer,
});

export default articlesReducers;
