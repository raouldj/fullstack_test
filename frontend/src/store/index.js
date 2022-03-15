import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers/reducers';

/**
 * Redux store setup as explained in: https://redux.js.org/recipes/configuring-your-store
 *
 * @param initialState
 * @returns {Store<{}, Action>}
 */
export default (initialState = {}) => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  return createStore(mainReducer, initialState, composedEnhancers);
};
