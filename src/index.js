import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './redux/store';
import ErrorBoundry from './components/ErrorBoundary';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

