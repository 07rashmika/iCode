import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const HeroImages = ({ image1Src, image2Src, image3Src }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1Src, image2Src, image3Src].filter(Boolean); // Filter out any null or undefined sources

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <>
      <div className="hero-image1">
        {images[currentIndex] && (
          <Image
            src={images[currentIndex]}
            width={250}
            height={240}
            alt='cover 1'
            className='images'
            style={{ display: currentIndex === 0 ? 'block' : 'none' }}
          />
        )}
        {images[currentIndex] && images.length > 1 && (
          <Image
            src={images[(currentIndex + 1) % images.length]}
            width={270}
            height={150}
            alt='cover 2'
            className='images'
            style={{ display: currentIndex === 1 && images.length > 1 ? 'block' : 'none' }}
          />
        )}
      </div>
      <div className="hero-image2">
        {images[currentIndex] && images.length > 2 && (
            <Image
                src={images[(currentIndex + 2) % images.length]}
                width={240}
                height={200}
                alt='cover 3'
                className='images'
                style={{
                display: images.length > 2
                    ? currentIndex === 2 ? 'block' : 'none'
                    : images.length <= 2 && images[currentIndex] ? 'block' : 'none',
                }}
            />
        )}
         {images.length <= 2 && images[currentIndex] && (
          <Image
            src={images[currentIndex]}
            width={240}
            height={200}
            alt='cover 3'
            className='images'
            style={{ display: 'none'}}
          />
        )}
      </div>
    </>
  );
};

HeroImages.propTypes = {
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
};

export default HeroImages;