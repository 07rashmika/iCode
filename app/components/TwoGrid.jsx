import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@components/ui/Button';
import HeroImages from '@components/HeroImages.jsx';

const TwoGrid = ({ header, text, position, buttonLabel, buttonOnClick, buttonType, buttonVariant, buttonSize, buttonDisabled, buttonLink, image1, image2, image3 }) => 
  {

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
        <HeroImages image1Src={image1} image2Src={image2} image3Src={image3}/>
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