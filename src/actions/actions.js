import React from 'react';
import ReactDOM from 'react-dom';

const addNewRow = (rowInfo) => {
    return {
      type: "ADD_ROW",
      rowInfo
    }
}

export default addNewRow;
