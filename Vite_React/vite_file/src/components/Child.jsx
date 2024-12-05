import React from 'react';
const Child = ({ info }) => {
  return (
    <div className='info_clg'>
      <h2>{info.clgName}</h2>
      <div className='year'>{info.year[2]}rd</div>
      <div>{info.date}</div>
    </div>
  );
};

export default Child;
