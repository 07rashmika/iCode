'use client';

import React from 'react';
import styles from '../../styles/button.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  link,
  icon,
}) => {
  const buttonContent = (
    <>
      {text}
      {icon && <FontAwesomeIcon icon={icon} style={{ marginLeft: '1rem' }} />}
    </>
  );

  return link ? (
    <Link href={link}>
      <button
        type={type}
        onClick={onClick}
        className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      >
        {buttonContent}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
    >
      {buttonContent}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  link: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.object, // e.g., faCoffee
    PropTypes.array,  // e.g., ['fas', 'coffee']
  ]),
};

export default Button;
