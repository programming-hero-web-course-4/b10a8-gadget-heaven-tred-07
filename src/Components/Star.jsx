import React from 'react';
import ReactStars from 'react-stars';

const Star = ({rating}) => {
  const ratingChanged = (rating) => {
    console.log(`New rating: ${rating}`);
  };

  return (
    <ReactStars
      count={5}
      onChange={()=>ratingChanged(rating)}
      size={24}
      color2={'#ffd700'}
    />
  );
};

export default Star;