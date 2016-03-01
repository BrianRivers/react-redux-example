import React from 'react';
import ReactDOM from 'react-dom';

export default class FilterInput extends React.Component {
  render() {
    return (
            <div className="col-md-16">
              <input onChange = {this.props.onFilterList} className="input-lg" placeholder="This is a test" />
            </div>
            )
  }

}
