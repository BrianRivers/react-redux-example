import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import Main from './components/Main.js';
import store from './stores/store.js';

const App = () => (
    <Main />
  )

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </ Provider>,
    document.getElementById('app')
  );
