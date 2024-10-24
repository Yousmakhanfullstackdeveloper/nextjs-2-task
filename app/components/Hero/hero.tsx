import styles from "../Hero/hero.module.css"

const Hero =() =>{
    return(
        <div className={styles.box}>
            <h1 className={styles.title}>Hero Section</h1>
            <p  className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laborum dolor hic ea accusantium quibusdam reprehenderit consequuntur tenetur natus sit quaerat officia aspernatur animi excepturi, eveniet pariatur, sint tempora quas!</p>
        </div>
    )
}
export default Hero