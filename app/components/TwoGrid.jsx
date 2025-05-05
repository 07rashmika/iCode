import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { images1 } from '../../data/index.js';
import { images2 } from '../../data/index.js';
import { images3 } from '../../data/index.js';
import Button from '@components/Button'; // Import your custom Button component

const TwoGrid = ({ header, text, position, buttonLabel, buttonOnClick, buttonType, buttonVariant, buttonSize, buttonDisabled, buttonLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previousIndex) => {
        const arrayLength = images1.length;
        return previousIndex === arrayLength - 1 ? 0 : previousIndex + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='paige-container'>
      <div className="home-container">
        {position === 'left' && (
          <div className="hero-text">
            <h1>{header}</h1>
            <p>{text}</p>
            {buttonLabel &&
              <Button
                text={buttonLabel}
                onClick={buttonOnClick}
                type={buttonType}
                variant={buttonVariant}
                size={buttonSize}
                disabled={buttonDisabled}
                link={buttonLink}
              />
            }
          </div>
        )}
        <div className="hero-image">
          <div className="hero-image1">
            {images1 && images1.length > 0 && (
              <img
                src={images1[currentIndex]}
                width={250}
                height={240}
                alt='cover 1'
                className='images'
              />
            )}
            {images2 && images2.length > 0 && (
              <img
                src={images2[currentIndex]}
                width={270}
                height={150}
                alt='cover 2'
                className='images'
              />
            )}
          </div>
          <div className="hero-image2">
            {images3 && images3.length > 0 && (
              <img
                src={images3[currentIndex]}
                width={240}
                height={200}
                alt='cover 3'
                className='images'
              />
            )}
          </div>
        </div>
        {position === 'right' && (
          <div className="hero-text">
            <h1>{header}</h1>
            <p>{text}</p>
            {buttonLabel &&
              <Button
                text={buttonLabel}
                onClick={buttonOnClick}
                type={buttonType}
                variant={buttonVariant}
                size={buttonSize}
                disabled={buttonDisabled}
                link={buttonLink}
              />
            }
          </div>
        )}
      </div>
    </div>
  );
};

TwoGrid.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  buttonLabel: PropTypes.string,
  buttonOnClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['button', 'submit']),
  buttonVariant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  buttonSize: PropTypes.oneOf(['small', 'medium', 'large']),
  buttonDisabled: PropTypes.bool,
  buttonLink: PropTypes.string,
};

export default TwoGrid;