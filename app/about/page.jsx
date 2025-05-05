'use client';

import React from 'react';
import styles from 'app/styles/about.module.css';
import Image from 'next/image';
import TwoGrid from '@components/TwoGrid';
import styles1 from 'app/styles/home.css';

const page = () => {
  return (
    <div className='page-container'>
      <div className="about-container">
        <TwoGrid position='right' header='huuuu' text='Hi there'/>
      </div>
    </div>
  )
}

export default page;