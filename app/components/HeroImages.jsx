import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const HeroImages = ({ image1Src, image2Src, image3Src }) => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const images1Array = Array.isArray(image1Src) ? image1Src.filter(Boolean) : [image1Src].filter(Boolean);
  const images2Array = Array.isArray(image2Src) ? image2Src.filter(Boolean) : [image2Src].filter(Boolean);
  const images3Array = Array.isArray(image3Src) ? image3Src.filter(Boolean) : [image3Src].filter(Boolean);

  useEffect(() => {
    if (images1Array.length > 1) {
      const interval1 = setInterval(() => {
        setIndex1((prevIndex) => (prevIndex + 1) % images1Array.length);
      }, 5000);
      return () => clearInterval(interval1);
    }
  }, [images1Array.length]);

  useEffect(() => {
    if (images2Array.length > 1) {
      const interval2 = setInterval(() => {
        setIndex2((prevIndex) => (prevIndex + 1) % images2Array.length);
      }, 5000);
      return () => clearInterval(interval2);
    }
  }, [images2Array.length]);

  useEffect(() => {
    if (images3Array.length > 1) {
      const interval3 = setInterval(() => {
        setIndex3((prevIndex) => (prevIndex + 1) % images3Array.length);
      }, 5000);
      return () => clearInterval(interval3);
    }
  }, [images3Array.length]);

  return (
    <div className="hero-image">
      <div className="hero-image1">
        {images1Array.length > 0 && (
          <Image
            src={images1Array[index1 % images1Array.length]}
            width={320}
            height={340}
            alt={`cover 1 - ${index1}`}
            className='images'
          />
        )}
        {images2Array.length > 0 && (
          <Image
            src={images2Array[index2 % images2Array.length]}
            width={350}
            height={300}
            alt={`cover 2 - ${index2}`}
            className='images imagesAlt'
          />
        )}
      </div>
      <div className="hero-image2">
        {images3Array.length > 0 && (
          <Image
            src={images3Array[index3 % images3Array.length]}
            width={300}
            height={280}
            alt={`cover 3 - ${index3}`}
            className='images'
          />
        )}
      </div>
    </div>
  );
};

HeroImages.propTypes = {
  image1Src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  image2Src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  image3Src: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};

export default HeroImages;