import React from "react"
import styles from "app/ui/website/navbar/navbar.module.css"

const Navbar = () => {
    return(
        <nav className={styles.container}>
        <div className={styles.logo}>oasis wellness center</div>
        <ul className={styles.navlist}>
            <li className={styles.navitem}>Home       About         Contact        Gallery           Policy</li>
            
        </ul>
        </nav>
    ) 
}
export default Navbar