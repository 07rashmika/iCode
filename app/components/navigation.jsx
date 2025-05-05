"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from 'app/styles/nav.css';
import Image from 'next/image';
import { navLinks } from '../../data/index.js'; 


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="page-container">
      <div className="container">
        <Link href="/" className="logo">
          <Image src="/logo.jpg" width={90} height={60} alt='logo'/>
        </Link>
        <div className={`menu ${isOpen ? 'active' : ''}`}>
        {navLinks.map((navItem, idx) => (
          <Link key={`link=${idx}`} href={navItem.link} className="nav-link">
            {navItem.name}
          </Link>
        ))}

        </div>
        <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
      </div>

      <style jsx>{`
        
        @media (max-width: 768px) {
          .menu {
            display: ${isOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 70px;
            right: 10px;
            background: #444;
            padding: 1rem;
            border-radius: 8px;
          }
          .toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  )
}
