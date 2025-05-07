'use client';

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from "../components/navigation"; 
import styles from 'app/styles/home.css';
import Slider from '@components/Slider';
import TwoGrid from '@components/TwoGrid';
import { images1 } from '../../data/index.js';
import { images2 } from '../../data/index.js';
import { images3 } from '../../data/index.js';

const Home = () => {
  const header = 'Hello world';
  const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione vitae fuga quis porro, deleniti minima natus officiis qui delectus amet. Exercitationem, eum optio ratione commodi autem at in! Nobis, consequuntur sit rerum odio neque eos debitis laboriosam quasi laudantium ducimus recusandae optio accusantium cum dolore maxime fuga, fugit voluptatum temporibus consequatur voluptatem facere sequi iste? In, et quos! Dolores, culpa. Ipsa necessitatibus, at accusamus molestias natus architecto accusantium rerum ducimus nemo odit maxime et ab, ipsum totam reiciendis quo, placeat beatae hic consectetur cumque! Accusamus labore velit voluptatem pariatur quidem facere a. Mollitia maiores obcaecati, ut a quam dicta consequatur.";
  return (
    
    <div className="page-container">
      
      <TwoGrid 
        header={header} 
        text={text} 
        position='left' 
        buttonLabel='Learn More' 
        buttonVariant='outline'
        image1={images1}
        image2={images2}
        image3={images3}
      />    

      <Slider/>
    </div>
  )
}

export default Home;