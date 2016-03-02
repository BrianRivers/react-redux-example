import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import FilterInput from './FilterInput.js';
import PatientList from './PatientList.js';
import Footer from './Footer.js';
import AddRow from './AddRow.js';
import addNewRow from '../actions/actions.js';
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

  componentWillReceiveProps = (nextProps) => {
      if(nextProps.patients){
        console.log(nextProps);
        var regex = new RegExp('');
        this.setState({filteredlist: this.filterPatientList(regex, nextProps.patients)});
      }
  }

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
     if(this.state.showFooter){
       return <Footer firstname = {this.state.name.firstname} lastname = {this.state.name.lastname} />
     }
      else {
        return null;
     }
  }

  onFilterList = (e) => {
    var regex = new RegExp(e.target.value, 'i');
    var filteredList = this.filterPatientList(regex, this.props.patients)
    this.setState({filteredlist: filteredList});
  }

  filterPatientList = (regex, patients) => {
    var filteredList = _.filter(patients, function (patient) {
         return patient.firstname.match(regex);
    });
    return filteredList;
  }

  onAddRow = (newRow) => {
    this.props.dispatch(addNewRow(newRow));
  }

  render() {
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
                <AddRow onAddRow = {this.onAddRow.bind(this)}/>
                <br /><hr/>
                { this.renderFooter() }
              </div>
            )
  }

}

function mapStateToProps (state) {
  console.log(state);
  return state;
}

export default connect(mapStateToProps)( Main);
