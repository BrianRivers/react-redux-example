import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {

  render() {
    console.log(this);
    return (
            <div className="col-md-16">
              <div> {this.props.firstname}&nbsp;{this.props.lastname} was clicked </div>
            </div>
            )
  }

}
