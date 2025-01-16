import styles from "./Home.module.css"


const Home =()=>{
  return(
    <>
    <div className={styles.homePageContainer}>
        <div className={styles.headerContainer}>
          <h1>Hi! Welcome to your Dashboard</h1>
        </div>
        <div className={styles.bodyContainer}>
          <h2>Somethinf</h2>
        </div>
    </div>
    </>
  )

}



export default Home;