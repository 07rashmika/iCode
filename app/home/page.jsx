'use client';

import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from "../components/navigation"; 
import styles from 'app/styles/home.css';
import Button from '@components/Button';
import Slider from '@components/Slider';
import TwoGrid from '@components/TwoGrid';
import { images1 } from '../../data/index.js';
import { images2 } from '../../data/index.js';
import { images3 } from '../../data/index.js';

const Home = () => {
  const header = 'Hello world';
  const text = 'Hello World';
  return (
    
    <div className="page-container">
      
      <TwoGrid header={header} text={text} position='left' buttonLabel='Learn More' buttonVariant='outline'/>    

      <Slider/>

      {/* <Button 
        text='Click Me'
        variant='primary'
        size='large'
        onClick={() => alert('Button Clicked!')}
      /> */}
    </div>
  )
}

export default Home;