import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import peopleReducer from './state/people/reducers';
import { watchPeople } from './state/people/saga';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});
const sagaMiddleware = createSagaMiddleware();

export default initialState => {
  const store = createStore(
    combineReducers({
      people: peopleReducer,
    }),
    initialState,
    compose(
      applyMiddleware(loggerMiddleware, sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  sagaMiddleware.run(watchPeople);

  return store;
};
