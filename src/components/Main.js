import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import FilterInput from './FilterInput.js';
import PatientList from './PatientList.js';
import Footer from './Footer.js';
import _ from 'lodash';

export default class Main extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      showFooter: false,
      name: {
        firstname: null,
        lastname: null
      },
      filteredlist: this.props.patients
    }
  };

  retrieveSelectedRow = (data) => {
    this.setState({
      showFooter:true,
      name: {
        firstname: data.firstname,
        lastname: data.lastname
      }
    });
  }

  renderFooter = () => {
    console.log('---- render footer ----');
     if(this.state.showFooter){
       return <Footer firstname = {this.state.name.firstname} lastname = {this.state.name.lastname} />
     }
      else {
        return null;
     }
  }

  onFilterList = (e) => {
    var regex = new RegExp(e.target.value, 'i');
    var filteredList = _.filter(this.props.patients, function (patient) {
         return patient.firstname.match(regex);
    });

    this.setState({filteredlist: filteredList});
  }

  render() {
    console.log('---- main render ----');
    return (
              <div>
                <h1>Marionette 101</h1>
                <hr/>
                <FilterInput onFilterList = {this.onFilterList}/>
                <hr/>
                <PatientList
                  onSelected = {this.retrieveSelectedRow.bind(this)}
                  filteredlist = {this.state.filteredlist} />
                <hr/>
                { this.renderFooter() }
              </div>
            )
  }

}

export default connect(state => state)( Main);
