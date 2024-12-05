import React from 'react';
import img from '../images/tf_image.jpg/';

const NameCard = ({ name, branch, roll }) => {
  return (
    <section>
      <div className='nameCard'>
        <img className='image' src={img} alt='My_Img' />
        <h1 className='name'>{name}</h1>
        <div className='branch'>{branch}</div>
        <h3 className='roll'>Roll no: {roll}</h3>
      </div>
    </section>
  );
};

export default NameCard;
