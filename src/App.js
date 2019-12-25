import React, { Component } from 'react'
import Validation from './validation/Validation.js';
import Char from './validation/Char/Char.js'


class App extends Component {
  state= {
    userInput: ''
  }

  inputHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }


  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return<Char character={ch} key={index}/>
    })
    return (
      <div>
        <h1>Hello</h1>
        <hr />
        <input
          type="text"
          onChange={this.inputHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  }
}

export default App;