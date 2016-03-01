import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';


class PatientRow extends React.Component {

    // static contextTypes = {
    //   row: React.PropType.string
    // }

    render() {
      return (
        <div onClick = {this.props.onClick}>
            <span className="col-md-2"> {this.props.patientid}</span>
            <span className="col-md-3"> {this.props.firstname}&nbsp;{this.props.lastname}  </span>
            <span> {this.props.state} </span>
        </div>)
    }
};


export default class PatientList extends React.Component {

  handleSelection = (patient , e) => {
    this.props.onSelected(patient);
  };

  renderPatientList = () => {
    var rowkey = 0;
    console.log(this.props.filteredlist);
    if(this.props.filteredlist.length > 0) {
      return this.props.filteredlist.map(patient =>
                      <PatientRow
                        key = {rowkey++}
                        patientid = {patient.patientid}
                        firstname = {patient.firstname}
                        lastname = {patient.lastname}
                        state = {patient.state}
                        onClick = {this.handleSelection.bind(null, patient)} /> );
    } else {
      return <div>Empty List</div>;
    }

  };

  render() {

    return (
              <div >
                <div className="column-headers">
                    <span> <strong className="col-md-2"> Patient Id </strong> </span>
                    <span className="col-md-3"><strong> Name </strong> </span>
                    <span> <strong> State </strong> </span>
                </div>

                <div className="collectionlist">
                    { this.renderPatientList() }
                </div>
              </div>
            )
  }

}

export default connect(state => state)( PatientList);
