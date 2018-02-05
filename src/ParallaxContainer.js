import React, {Component} from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


class ParallaxContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      imgNumber: '5'
    };
  }

  // const imgSrc = `https://tympanus.net/Development/ExpandingGridItemAnimation/img/${this.imgNumber}.png`;

  render(){
    const A2 = {
        bounds: [167, 281],
        forms: [
            <svg viewBox="0 0 167 281" version="1.1">
                <polygon className="fill-4" points="0,226 83.5,0.1 167,226 " />
            </svg>,
            <svg viewBox="0 0 167 281" version="1.1">
                <path
                    className="fill-1"
                    d="M112.8,211.8v29.5c0,16.3-13.2,29.5-29.5,29.5s-29.5-13.2-29.5-29.5v-29.5 c0-16.3,13.2-29.5,29.5-29.5S112.8,195.5,112.8,211.8z"
                />
            </svg>
        ]
    };

    const R3 = {
        bounds: [135, 281],
        forms: [
            <svg viewBox="0 0 135 281" version="1.1">
                <path
                    className="fill-2"
                    d="M67,22H0v134h67c37,0,67-30,67-67S104,22,67,22z"
                />
            </svg>,
            <svg viewBox="0 0 135 281" version="1.1">
                <polygon className="fill-6" points="55,226 55,92 135,226 " />
            </svg>,
            <svg viewBox="0 0 135 281" version="1.1">
                <rect className="fill-1" y="22" width="55" height="204" />
            </svg>
        ]
    };

    const A4 = {
        bounds: [167, 281],
        forms: [
            <svg viewBox="0 0 167 281" version="1.1">
                <polygon className="fill-5" points="0,226 83.5,0.1 167,226 " />
            </svg>,
            <svg viewBox="0 0 167 281" version="1.1">
                <path
                    className="fill-1"
                    d="M112.8,211.8v29.5c0,16.3-13.2,29.5-29.5,29.5s-29.5-13.2-29.5-29.5v-29.5 c0-16.3,13.2-29.5,29.5-29.5S112.8,195.5,112.8,211.8z"
                />
            </svg>
        ]
    };

    const Word = [A2, R3, A4];

    return(
      <div>
        <ParallaxProvider>
          <Parallax>
          {Word.map((X,i)=>
            <div style={{width:X.bounds[0],height:X.bounds[1]}} key={i}>
              {X.forms}
            </div>)
          }
          </Parallax>


          {/*
          <div>
            <Parallax
              className="custom-class"
              offsetYMax=-500
              tag="figure"
            >
              <img src='https://tympanus.net/Development/ExpandingGridItemAnimation/img/4.png' width='250'/>
            </Parallax>
          </div>
          */}

        </ParallaxProvider>
      </div>
    );
  }
}

export default ParallaxContainer;
