'use client';

import React from 'react';
import TwoGrid from '@components/TwoGrid';
import Button from '@components/Button';
import styles1 from 'app/styles/home.css';
import styles from 'app/styles/about.module.css'
import { images1 } from '../../data/index.js';
import { images2 } from '../../data/index.js';
import { images3 } from '../../data/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const page = () => {
  const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vitae fuga quis porro, deleniti minima natus officiis qui delectus amet. Exercitationem, eum optio ratione commodi autem at in! Nobis, consequuntur sit rerum odio neque eos debitis laboriosam quasi laudantium ducimus recusandae optio accusantium cum dolore maxime fuga, fugit voluptatum temporibus consequatur voluptatem facere sequi iste? In, et quos! Dolores, culpa. Ipsa necessitatibus, at accusamus molestias natus architecto accusantium rerum ducimus nemo odit maxime et ab, ipsum totam reiciendis quo, placeat beatae hic consectetur cumque! Accusamus labore velit voluptatem pariatur quidem facere a. Mollitia maiores obcaecati, ut a quam dicta consequatur.";
  return (
    <div className='page-container'>
      <div className="about-container">
        <h1 className={styles.welcome}>
          Welcome to iCode
        </h1>
        <TwoGrid 
          position='right' 
          header='iCode:' 
          text={text}
          image1={images1}
          image2={images2}
          image3={images3}
        />
        <div className={styles.motto}>
          <h1 className={styles.quote_mark}><FontAwesomeIcon icon={faQuoteLeft} /></h1>
          <p className={styles.quote_para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita deleniti exercitationem sint molestiae molestias facilis sequi similique velit ea id fuga cum eos iusto modi nihil esse, eius sit sunt laboriosam vero odio porro voluptate? Odit molestias molestiae cupiditate. Fugit repellendus, numquam cum culpa vitae amet. Tenetur, ex velit.
          </p>
        </div>

        <div className={styles.we_do}>
          <h1>What we do?</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veritatis libero facilis iste consectetur. Ullam minima vitae blanditiis minus perspiciatis sequi quibusdam numquam reprehenderit hic? Debitis, id minus pariatur consectetur tenetur quaerat quod autem quibusdam ad, sapiente dolorum praesentium blanditiis dicta corrupti possimus asperiores! Et, delectus minima magnam ratione voluptatem reiciendis explicabo, eius suscipit quasi officia dolores vitae velit obcaecati maiores dolorum quaerat illo doloribus inventore corrupti. Accusantium eos blanditiis, commodi ab ut provident iste cumque minima soluta voluptate velit.</p>
          <Button text='Learn more' variant='no_outline' link='/services'/>
        </div>
      </div>
    </div>
  )
}

export default page;