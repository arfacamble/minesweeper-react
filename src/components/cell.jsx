import React, { Component } from 'react';

class Cell extends Component {
  render() {
    return(
      <img src={this.props.cell.display} alt="">
    )
  }
}

export { Grid };
