import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddlewate from "redux-saga"
import { watcherSaga } from "./sagas/root"
import { createBrowserHistory } from 'history'
import { routerMiddleware } from "connected-react-router"

export const history = createBrowserHistory()

const historyMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddlewate()

const middlewares = [historyMiddleware, sagaMiddleware]

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(watcherSaga)

export default store 