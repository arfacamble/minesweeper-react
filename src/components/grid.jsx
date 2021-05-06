import React, { Component } from 'react';
const exampleGridWithType = require('../data/example-grid.js').exampleGridWithType;

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      col: 8,
      row: 8,
      cells: exampleGridWithType
    }
  }

  render() {
    return(
      <CellContainer col={this.state.col} row={this.state.row}>
        {this.state.cells.map(cell => <Cell data={cell} />)}
      <CellContainer />
    )
  }
}

export { Grid }
