import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      col: 8,
      row: 8
    }
  }

  render() {
    return(
      <table>
      </table>
    )
  }
}

export { Grid };
