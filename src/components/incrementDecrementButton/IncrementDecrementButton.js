import React, { Component } from 'react';
import "./IncrementDecrementButton.css"
class IncrementDecrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  IncrementItem = () => {
    if(this.state.clicks<5)
         this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
      if(this.state.clicks>0)
        this.setState({ clicks: this.state.clicks - 1 });
  }
  
  handleChange= (event) => {
    console.log("fhfgf", event.target.value)
    this.setState({clicks: event.target.value});
   
  }

  render() {
    return (
      <div>
        <button onClick={this.DecreaseItem}>-</button> 
        <input type="text" id="in" placeholder={this.state.clicks}  onChange={this.handleChange} value={this.state.clicks}/>
        <button onClick={this.IncrementItem}>+</button>
      
        {/* <input type="number" name="age" id="age"
                min="1" max="5" step="1" onChange={this.handleChange} value={this.state.clicks}></input> */}
      </div>
    );
  }
}

export default IncrementDecrementButton;