import styles from "../skills/skills.module.css"
import Link from "next/link";
const skillsPage =() =>{
    return(
        <div>

<nav><ul className={styles.navbar}>
        <li><Link className={styles.nav} href="/">Home</Link></li>
        <li><Link className={styles.nav} href="/service">Service</Link></li>
        <li><Link className={styles.nav} href="/about">About</Link></li>
        <li><Link className={styles.nav} href="/contact">Contact</Link></li>
        <li><Link className={styles.nav} href="/product">product</Link></li>
        </ul>
        </nav>
        <h1 className={styles.faqs}>This is Skills page</h1>
        </div>
    )
};
export default skillsPage