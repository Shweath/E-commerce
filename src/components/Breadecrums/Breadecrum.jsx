import React from 'react';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadecrum = (props) => {
const {product} = props;  
  return (
    <div className='breadecrum flex'>
      Home <img src={arrow_icon} alt="arrow" /> Shop  <img src={arrow_icon} alt="arrow" />
      {product.category} <img src={arrow_icon} alt="arrow" />{product.name}
    </div>
  );
};

export default Breadecrum;
