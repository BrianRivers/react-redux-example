import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';

// ** Create my Redux Store ** //
import { createStore, combineReducers } from 'redux';

const reducer = (state, action) => {

      switch (action.type) {
        case 0:
          return 'Initial';
        case 1:
          return 'Primus';
        case 2:
          return 'Secondus';
        default:
          return 'Default';
      };
 }

const store = createStore(reducer);

console.log(store);
console.log(store.getState());

store.dispatch({type: 2});

console.log(store.getState());

class Main extends React.Component {

  render() {
    console.log(this.props);
    return (
              <div>
                <div>A test!</div>
                <h1>Not a good test!</h1>
              </div>
            );
  }

};

ReactDOM.render(
    <Provider store = {store}>   <Main />   </ Provider>,
    document.getElementById('app')
  );
