import {
  applyMiddleware,
  createStore,
  compose,
  combineReducers
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const customMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  return next(action);
};

const middlewares = [thunk, customMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}
const appliedMiddlewares = applyMiddleware(...middlewares);

const rootReducer = combineReducers({});

const configureStore = (initialState) => {
  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(appliedMiddlewares));

  return store;
};

export { configureStore };
