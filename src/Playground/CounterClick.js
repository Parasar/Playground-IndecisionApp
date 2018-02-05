import React, {Component} from 'react';

class CounterClick extends Component {

  constructor(props){
    super(props);

    this.state = {clickcount: 0};
  }



  render(){
  let count = 0;

    const buttonPlused = () => {
      count = count+1;
      console.log('addone', count);
      // this.setState({clickcount: this.state.clickcount+1});
      // console.log(this.state.clickcount);
    };

    const buttonMinused = () => {
      count = count-1;
      this.setState({clickcount: this.state.clickcount-1});
      console.log(this.state.clickcount);
    };

    const buttonStyle = {
      width:'200px',
      height: '100px',
      font: '20px bold Arial',
      background: 'red',
      color: 'white'
    };



    return(
      <div>
          <div>
            <h1>Counter: {this.state.clickcount}</h1>
            {/* <input placeholder={"asa"} value={this.state.clickcount}/> */}
            <button onClick={buttonPlused} style={buttonStyle}>+1</button>
            <button onClick={buttonMinused} style={buttonStyle}>-1</button>
          </div>
      </div>
    );
  }
}

export default CounterClick;
