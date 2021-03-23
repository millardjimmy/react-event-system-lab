import React, { Component } from 'react'


class Keypad extends Component {

    handleKeyUp = () => console.log('Entering password...')
    

  render() {
    return (
        <input onKeyUp={this.handleKeyUp} type="password" />
    )
  }
}

export default Keypad