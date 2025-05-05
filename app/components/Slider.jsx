import React from 'react';
import { Logos } from '../../data/index.js'; 
import styles from '../styles/slider.module.css';
import Image from 'next/image.js';

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
        <div className={styles.sliderTracker}>
            {[...Logos, ...Logos].map((logo) => (
                <div className={styles.logo} key={logo.id + Math.random()}>
                    <Image src={logo.img} alt='logo'width={150} height={120}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider;