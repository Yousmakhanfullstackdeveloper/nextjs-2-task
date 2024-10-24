import styles from "../faqs/faqs.module.css"
import Link from "next/link";
const faqsPage =() =>{
    return(
        <div>

<nav><ul className={styles.navbar}>
        <li><Link className={styles.nav} href="/">Home</Link></li>
        <li><Link className={styles.nav} href="/service">Service</Link></li>
        <li><Link className={styles.nav} href="/skills">Skill</Link></li>
        <li><Link className={styles.nav} href="/contact">Contact</Link></li>
        <li><Link className={styles.nav} href="/product">product</Link></li>
        </ul>
        </nav>
        <h1 className={styles.faqs}>This is FAQs page</h1>
        </div>
    )
};
export default faqsPage