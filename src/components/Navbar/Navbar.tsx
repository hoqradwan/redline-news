// src/components/Navbar.js
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Link href="/">RedLine News</Link>
        </div>
        <div className={styles.navLinks}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/articles" className={styles.link}>Articles</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
        </div>
    </nav>
);

export default Navbar;
