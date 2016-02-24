import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './components/Main.js';

// ** Create my Redux Store ** //
import { createStore, combineReducers } from 'redux';

const reducer = (state, action) => {

      switch (action.type) {
        case 0:
          return {value:'Initial'};
        case 1:
          return {value:'Primus'};
        case 2:
          return {value:'Secondus'};
        default:
          return {value:'Default'};
      };
 }

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.dispatch({type: 2});

console.log(store.getState());

const App = () => (
    <Main />
  )

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </ Provider>,
    document.getElementById('app')
  );
