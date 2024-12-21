
import styles from  "./LandingPage.module.css"

const LandingPage = () => {
  return (
    <div className={styles.LPContainer}>
      <section className={styles.heroSection}>
          <h2>Southern African farmers lost</h2>
          <span>50%</span>
          <h4>of their crops in 2024 due to unpredictable weather and poor planning.</h4>
        <div className="headlineText">
          
        </div>
        <div className="supportiveHeadline">
          <h2>We’re here to change that with 
          <span>AI-Powered Farming</span> Tools.</h2>
          <p>Get accurate crop suggestions, real-time weather insights, and smart tools to<br/> boost your yields—no matter the climate challenges.</p>
        </div>
        <div className="callToAction">
          <h1>Start Optimizing Your Farm Today
          See How It Works</h1>
        </div>
        </section>
    </div>




  )
}

export default LandingPage