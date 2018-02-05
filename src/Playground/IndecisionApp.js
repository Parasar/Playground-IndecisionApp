import React, {Component} from 'react';

class IndecisionApp extends Component {

  constructor(props){
    super(props);

    this.state = {
      errorMessage: '',
      arrayCount: 2,
      arrayItems: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(){
    console.log(this.state.arrayItems);
    this.setState((prevState)=>{
      return {arrayItems: []};
    });
  }

  handleSubmit(e){
    e.preventDefault();
    let option = e.target.elements.option.value;

    if (!option) {
      this.setState(()=>{
        return {errorMessage: 'Enter something'}
      });


    }
    else if (this.state.arrayItems.indexOf(option)>-1) {
      // console.log('Enter a valid input') ;
      this.setState(()=>{
        return {errorMessage: 'Enter a valid input'}
      });
    }
    else if (option) {
      this.setState((prevState)=>{
        return {
          // arrayCount: prevState.arrayCount + 1,
          arrayItems: prevState.arrayItems.concat(option),
          errorMessage: ''
        }
      });
      e.target.elements.option.value = '';
      console.log(this.state);
    }

  }

  render(){

    const app = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer'
      // options: ['one','two', 'three']
    };


    return(
      <div>
            {/* <h1>{app.title}</h1>*/}
            <h3>{app.subtitle}</h3>
            <p>{this.state.arrayItems.length > 0 ? 'Here are your options' : 'No options'}</p>

            <ol>
              {
                this.state.arrayItems.map((option, i)=> { return <li key={i}>{option}</li>})
              }
            </ol>

            <p>{this.state.errorMessage=''? '':this.state.errorMessage}</p>
            <form onSubmit={this.handleSubmit}>
              <input type='text' name='option'/>
              <button>Add option</button>
            </form>

            {this.state.arrayItems.length > 0 ? <button onClick={this.handleReset}>Reset</button>:undefined}

      </div>
    );
  }
}

export default IndecisionApp;
