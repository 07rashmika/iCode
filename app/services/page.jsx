'use client';

import React from 'react';
import Image from 'next/image';
import { benefits } from '../../data/index.js';
import styles from '../styles/Benefits.module.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '@components/ui/Button.jsx';
import Header from '@components/ui/Header.jsx';

const Benefits = () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates sapiente odio atque ipsam ea eligendi aliquid odit est perferendis quidem, laudantium, recusandae quis, accusamus rem! Dolore, fugit aspernatur, vel in voluptates quae cupiditate eveniet voluptatem quam suscipit itaque? Est, voluptas.';

  return (
    <div className="paige-container">
      <div className={styles.container}>
      <Header head='iCodes Services' text={text}/>

        <div className={styles.grid}>
          {benefits.map((item) => (
            <div
              key={item.id}
              className={styles.serviceCard}
            >
              <div className={styles.cardContent}>
                <h5 className={styles.title}>{item.title}</h5>
                <p className={styles.description}>{item.text}</p>
                <div className={styles.exploreRow}>
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className={styles.icon}
                  />
                  <Button text='Explore more' variant='no_outline' link='/home' icon={faArrowRight} />
                </div>
              </div>

              <div className={styles.cardImageOverlay}>
                {item.imageUrl && (
                  <div className={styles.imageHoverEffect}>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={380}
                      height={362}
                      className={styles.image}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
