import createSagaMiddleware from 'redux-saga'

let lastAction = null;
export const getLastAction = () => lastAction;

export const lastActionMiddleware = store => next => action => {
 lastAction = action;
 return next(action);
}

export const sagaMiddleware = createSagaMiddleware()

export default [sagaMiddleware, lastActionMiddleware]
