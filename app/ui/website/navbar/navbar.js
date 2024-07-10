import React from 'react'
import styles from '@/app/ui/website/navbar/navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            <h1 className={styles.hi}>Oasis Wellness Center</h1>
            <nav className={styles.navbar}>
              <ul>
                <li><a href="http://localhost:3000">Home</a></li>
                <li><a href="http://localhost:3000/about">About Us</a></li>
                <li><a href="http://localhost:3000/contact">Contact Us</a></li>
                <li><a href="http://localhost:3000/gallery">Gallery</a></li>
                <li><a href="http://localhost:3000/policy">Policy</a></li>
              </ul>
           </nav>
        </div>
    )
}

export default Navbar