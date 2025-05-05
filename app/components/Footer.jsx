import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='page-container'>
      <div className="footer">
        <div className="footer-left">
          <div className="logo">
            <Image src="/logo.jpg" width={90} height={60} alt='logo'/>
          </div>
          <p className='cpyRight'>&#169; {year} iCODE Software Solutions. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <h1>
            Visit Us
          </h1>
          <div className="location">            
            <p>
              Colombo, Sri Lanka
            </p>
            <p>Address comes, <br /> here.</p>
            <p>0741234567</p>
          </div>
          <div className="socials">
            <Link href='https://www.facebook.com/profile.php?id=61561683892074' target='_blank'><FontAwesomeIcon icon="fa-brands fa-facebook" className='icons'/></Link>
            <Link href='/'><FontAwesomeIcon icon="fa-brands fa-instagram" className='icons'/></Link>
            <Link href='/'><FontAwesomeIcon icon="fa-brands fa-x-twitter" className='icons'/></Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
    
  )
}

export default footer;