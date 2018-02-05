import React, {Component} from 'react';

class ArrowFunctions extends Component {

  constructor(props){
    super(props);

    this.state = {
    };
  }



  render(){

    let data = [
      {name: 'Parasar Das', age :35},
      {name: 'Bobo', age :5},
      {name: 'Kaa', age :2}
    ];

    // That = this
    ////////////////////

    // const user = {
    //   name: 'Parasar',
    //   cities: ['Mumbai', 'Bangalore', 'Melbourne'],
    //   printCitiesLived: function(){
    //     // console.log(this.cities);
    //     const that = this;
    //
    //     this.cities.forEach(function(city){
    //       console.log(that.name + ' has lived in ' + city);
    //     });
    //
    //   }
    // }

    // Arrow function
    //////////////////

    const user = {
      name: 'Parasar',
      cities: ['Mumbai', 'Bangalore', 'Melbourne'],
      printCitiesLived(){
        return this.cities.map((city)=>this.name + ' has lived in ' + city);
      }
    };

    console.log(user.printCitiesLived());

    return(
      <div>
        {
          data.map((x,i)=> {
           if (x.age>=2) {
             return <div key={i}> {x.name.split(' ')[0]} </div>
           }
        })
        }
      </div>
    );
  }
}


export default ArrowFunctions;
