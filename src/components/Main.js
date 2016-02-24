import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import FilterInput from './FilterInput.js';
import PatientList from './PatientList.js';

export default class Main extends React.Component {

  // static contextTypes = {
  //   test: React.PropTypes.object
  // };

  onClick = () => {
      console.log(this);
  };

  render() {
    return (
              <div>
                <h1 onClick={this.onClick}>React-Redux 101</h1>
                <hr/>
                <FilterInput />
                <hr/>
                <PatientList />
                <hr/>
              </div>
            )
  }

}

export default connect(state => state)( Main);
