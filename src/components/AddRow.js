import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default class AddRoq extends React.Component {

constructor (props) {
    super (props);
    this.state = {
      patientid:'',
      firstname: '',
      lastname: '',
      state: '',
      error: ''
    }
  };

 onSubmit = () => {
    if(
      !_.isEmpty(this.state.patientid) &&
      !_.isEmpty(this.state.firstname) &&
      !_.isEmpty(this.state.lastname) &&
      !_.isEmpty(this.state.state)
          ){
      this.props.onAddRow(this.state);
      this.setState({error:''});
    } else {
      this.setState({error:'Warning, all fields must be completed!'});
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  }

  render() {
    return (
              <div>
                <div className="add-row col-md-12">
                  <button className="col-md-1" onClick={this.onSubmit}>+</button>
                  <input className="col-md-2" name="patientid" value={this.state.patientid} placeholder="Patient Id" onChange = {this.onChange}/>
                  <input className="col-md-3" name="firstname" value={this.state.firstname} placeholder="First Name" onChange = {this.onChange}/>
                  <input className="col-md-3" name="lastname" value={this.state.lastname} placeholder="Last Name" onChange = {this.onChange}/>
                  <input className="col-md-2" name="state" value={this.state.state} placeholder="State" onChange = {this.onChange}/>
                </div>
                <br /><br />
                <div className="col-md-12"><strong>{this.state.error}</strong></div>
              </div>

            )
  }

}
