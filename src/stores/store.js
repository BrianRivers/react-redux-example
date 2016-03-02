import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import data from '../data/testdata.js';

// ** Create my Redux Store ** //
import { createStore, combineReducers } from 'redux';

const reducer = (state = {patients: data}, action) => {

      switch (action.type) {
        case "ADD_ROW":
        var test = {
            patients:  [...state.patients, action.rowInfo]
          };
          return test;
          break;
        default:
          return state;
      };
 }

const store = createStore(reducer);

export default store;
