import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './redux/store';
import ErrorBoundry from './components/ErrorBoundary';
import { PokemonProvider } from './service/pokemonContext';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <PokemonProvider>
        <Router>
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        </Router>
      </PokemonProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

