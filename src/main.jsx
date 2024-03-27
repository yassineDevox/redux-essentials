import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store, { history } from './store/'
import { ConnectedRouter } from 'connected-react-router'
import './shared/locales/i18n'
import InternalizationProvider from './shared/context/internalization'
import { AuthProvider } from './shared/context/authorization'


ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <InternalizationProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </InternalizationProvider>
        </ConnectedRouter>
      </Provider>
    </React.StrictMode>,
  )
