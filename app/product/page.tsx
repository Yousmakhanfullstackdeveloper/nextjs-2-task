import styles from "../product/product.module.css"
import Link from "next/link";
const productPage =() =>{
    return(
        <div>

<nav><ul className={styles.navbar}>
        <li><Link className={styles.nav} href="/">Home</Link></li>
        <li><Link className={styles.nav} href="/faqs">FAQs</Link></li>
        <li><Link className={styles.nav} href="/skills">Skill</Link></li>
        <li><Link className={styles.nav} href="/contact">Contact</Link></li>
        <li><Link className={styles.nav} href="/about">About</Link></li>
        <li><Link className={styles.nav} href="/service">Service</Link></li>
        </ul>
        </nav>
        <h1 className={styles.service}>This is product page</h1>
        </div>
    )
};
export default productPage