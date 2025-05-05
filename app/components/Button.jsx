'use client';

import React from 'react';
import styles from '../styles/button.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Button = ({
  text,
  onClick,
  type = 'button', 
  variant = 'primary', 
  size = 'medium', 
  link, 
}) => {
  return (
    <> 
      {link ? (
        <Link href={link}>
          <button
            type={type}
            onClick={onClick}
            className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
        >
          {text}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  link: PropTypes.string,
};

export default Button;