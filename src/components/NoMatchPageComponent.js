import React from 'react';
import {Link} from 'react-router-dom';

const style = {
  fontSize: '70px',
  color: 'rgba(0,0,255,1)'
}


const NoMatchPageComponent = () => {
  return (
    <div>
      <p style={style}>404!</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NoMatchPageComponent;
