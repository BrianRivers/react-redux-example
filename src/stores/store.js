import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from '../data/testdata.js';

// ** Create my Redux Store ** //
import { createStore, combineReducers } from 'redux';

const reducer = (state = {patients: data}, action) => {

      switch (action.type) {
        default:
          return state;
      };
 }

console.log(data);
const store = createStore(reducer);

export default store;
