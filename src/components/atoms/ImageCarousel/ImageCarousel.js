import React, { useState } from 'react';

const ZERO = 0;
const ONE = 1;
const BACK = '<';
const FORWARD = '>';

export const ImageCarousel = ({ imgList }) => {
  const [imgIndex, setImgIndex] = useState(ZERO);
  const showLeftArrow = imgIndex > ZERO;
  const showRightArrow = imgIndex < imgList.length - ONE;

  return (
    <div className="imagecarousel">
      {showLeftArrow && <span className="imagecarousel-arrow-back" onClick={() => {
        setImgIndex(imgIndex - ONE);
      }}>{BACK}</span>}
      <img
        className="imagecarousel-img"
        src={imgList[imgIndex]}
      />
      {showRightArrow && <span className="imagecarousel-arrow-forward" onClick={() => {
        setImgIndex(imgIndex + ONE);
      }}>{FORWARD}</span>}
    </div>
  );
};
