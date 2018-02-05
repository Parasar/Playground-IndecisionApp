import React, {Component} from 'react';

class Playground extends Component {

  constructor(props){
    super(props);

    this.state = {
      imgNumber: '5'
    };
  }

  // const imgSrc = `https://tympanus.net/Development/ExpandingGridItemAnimation/img/${this.imgNumber}.png`;


  /*
//Ternary operator
  var dataTemplate = (
    data.map((x,i) => {
      return <div key={i}>
            {x.name}
            {' is '}
            {x.age<5?x.age:''}
            {' years old!'}
          </div>;
    })
  );
*/


  render(){

    var data = [
      {name: 'Parasar', age :35},
      {name: 'Bobo', age :5},
      {name: 'Kaa', age :2}
    ];

// Name is x years old!
{/*    var dataTemplate1 = (
      data.map((x,i) =>
         {
           if(x.age <= 5){
            return <div key={i}>{x.name + ' ' + 'is ' + x.age + ' years old!'}</div>;
           }
         }
      )
    );
*/}

     const dataTemplate2 = (x) => {
       return(
      <div>
        <span>{x.name}</span>
        <span> is </span>
        <span>{x.age}</span>
        <span> years old!</span>
      </div>
    )
    }


    return(
      <div>
      {/* TECHNIQUE 1
        {dataTemplate1} */}


      {/* TECHNIQUE 2   */}
        {
          data.map((x,i) => {
            if(x.age <= 5){
              return dataTemplate2(x)
            }
          })
        }
      </div>
    );
  }
}






export default Playground;
