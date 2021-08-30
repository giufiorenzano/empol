import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';

const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
