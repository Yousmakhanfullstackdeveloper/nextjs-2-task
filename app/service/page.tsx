import styles from "../service/service.module.css"
import Link from "next/link";
const servicePage =() =>{
    return(
        <div>

<nav><ul className={styles.navbar}>
        <li><Link className={styles.nav} href="/">Home</Link></li>
        <li><Link className={styles.nav} href="/FAQs">FAQs</Link></li>
        <li><Link className={styles.nav} href="/skills">Skill</Link></li>
        <li><Link className={styles.nav} href="/contact">Contact</Link></li>
        <li><Link className={styles.nav} href="/product">product</Link></li>
        </ul>
        </nav>
        <h1 className={styles.service}>This is service page</h1>
        </div>
    )
};
export default servicePage