import styles from "../contact/contact.module.css"
import Link from "next/link";
const contactPage =() =>{
    return(
        <div>

<nav><ul className={styles.navbar}>
        <li><Link className={styles.nav} href="/">Home</Link></li>
        <li><Link className={styles.nav} href="/service">Service</Link></li>
        <li><Link className={styles.nav} href="/skills">Skill</Link></li>
        <li><Link className={styles.nav} href="/faqs">FAQs</Link></li>
        <li><Link className={styles.nav} href="/product">product</Link></li>
        <li><Link className={styles.nav} href="/about">About</Link></li>
        </ul>
        </nav>
        <h1 className={styles.contact}>This is contact page</h1>
        </div>
    )
};
export default contactPage