import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { watcherSaga } from "./sagas/root"
import { createBrowserHistory } from 'history'
import { routerMiddleware } from "connected-react-router"
import createSagaMiddlewate from "redux-saga"
import reducers from "./reducers"

export const history = createBrowserHistory()

const historyMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddlewate()

const middlewares = [historyMiddleware, sagaMiddleware]

const composeEnhancers = composeWithDevTools({});

const store = createStore(
    reducers(history),
    composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(watcherSaga)

export default store 