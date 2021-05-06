import React, { Component } from 'react';

class CellContainer extends Component {
  styles = {
    display: 'grid',
    width: `${this.props.col * 10}px`,
    height: `${this.props.row * 10}px`,
  }

  render() {
    return(
      <div></div>
    )
  }
}

export { CellContainer };
