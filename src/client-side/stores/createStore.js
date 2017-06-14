import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {createLogger} from 'redux-logger';

const middlewares = [thunk];
const logger = createLogger();
middlewares.push(logger);
export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
