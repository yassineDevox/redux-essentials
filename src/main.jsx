import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store, { history } from './store/'
import { ConnectedRouter } from 'connected-react-router'



ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </React.StrictMode >,
  )
