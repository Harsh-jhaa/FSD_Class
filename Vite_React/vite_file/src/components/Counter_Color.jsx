import React, { useState } from 'react';
// import Counter from './Counter';

const Counter_Color = () => {
  const [style, setStyle] = useState('');

  const colorChange = (e) => {
    setStyle(e.target.value);
  };

  return (
    <>
      <div>
        <h1 style={{ color: style }}>My favourite Color is {style}</h1>
      </div>

      <button className='button' onClick={colorChange} value='green'>
        Green
      </button>
      <button className='button' onClick={colorChange} value='red'>
        Red
      </button>
      <button className='button' onClick={colorChange} value='blue'>
        Blue
      </button>
    </>
  );
};

export default Counter_Color;
