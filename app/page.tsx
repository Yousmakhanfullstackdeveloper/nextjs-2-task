import Footer from "./components/Footer/footer"
import Hero from "./components/Hero/hero";
import Header from "./components/Header/header";
import styles from "./page.module.css"
const HomePage = () =>{


return(
  <div className={styles.title}>
    <Header/>
<Hero/>
<Footer/>
</div>

  
)
}
export default HomePage