import React, { Component } from 'react';


class Toolbar extends Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default Toolbar;
