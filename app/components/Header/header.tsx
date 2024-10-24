import styles from "../Header/header.module.css"
import Link from "next/link"
const Header = () =>{
    return(
        <div className={styles.container}>
            
        <h1 className={styles.heading}>ESSENTIAL</h1>
        <nav><ul className={styles.navbar}>
        <li><Link className={styles.nav} href="/">Home</Link></li>
        <li><Link className={styles.nav} href="/contact">Contact</Link></li>
        <li><Link className={styles.nav} href="/service">Service</Link></li>
        <li><Link className={styles.nav} href="/about">About</Link></li>
        <li><Link className={styles.nav} href="/skills">Skill</Link></li>
        <li><Link className={styles.nav} href="/FAQs">FAQs</Link></li>
        <li><Link className={styles.nav} href="/product">product</Link></li>
        </ul>
        </nav>
    
        </div>
    )
}
export default Header