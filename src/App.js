
import './App.css';
import RPS from './RPS'
import React from 'react'
import Result from './Result'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      'cap': {
        'max' : 3,
        'min': 0
      },
      'counts': {
        'rock':  0,
        'paper': 0,
        'scissor': 0
      }
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(action) {
    if (this.state.counts[action] < this.state.cap.max) {
      console.log("increment", action);
      let newState = Object.assign({}, this.state);
      newState.counts[action] = newState.counts[action] + 1;
      console.log(newState)
      this.setState(newState)
    }
  }

  decrement(action) {
    if (this.state.counts[action] > this.state.cap.min) {
      console.log("decrement", action);
      let newState = Object.assign({}, this.state);
      newState.counts[action] = newState.counts[action] - 1;
      console.log(newState)
      this.setState(newState)
    }
  }        

  render() {
    return (
      <div className="App">
        <div>
          <table className="rps-table">
            <tbody>
              <tr>
                  <th>
                      Rock
                  </th>
                  <th>
                      Paper
                  </th>
                  <th>
                      Scissor
                  </th>
              </tr>
              <tr>
                <td>
                  <RPS id="rock-container" name='rock' count={this.state.counts.rock} onIncrement={this.increment} onDecrement={this.decrement}/>
                </td>
                <td>
                  <RPS id="paper-container" name='paper' count={this.state.counts.paper} onIncrement={this.increment} onDecrement={this.decrement}/>
                </td>
                <td>
                  <RPS id="scissor-container" name='scissor' count={this.state.counts.scissor} onIncrement={this.increment}  onDecrement={this.decrement}/>
                </td>
              </tr>
            </tbody>
          </table>
          <Result state={this.state.counts}/>
        </div>
      </div>
    );
  }
}

export default App;
