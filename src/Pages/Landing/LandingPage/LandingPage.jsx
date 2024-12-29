
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCloud, faSeedling, faTractor, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import styles from  "./LandingPage.module.css"
import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className={styles.LPContainer}>
      <section className={styles.heroSection}>
        <div className={styles.headlineText}>
          <h2>Southern African farmers lost</h2>
          <span>50%</span>
          <h4>of their crops in 2024 due to<br/> unpredictable weather and poor planning.</h4>
        
        </div>
        <div className={styles.supportiveHeadline}>
          <h2>We’re here to change that with<br/>
          <span>AI-Powered Farming</span> Tools.</h2>
          <p>Get accurate crop suggestions, real-time weather insights, and smart tools to<br/> boost your yields—no matter the climate challenges.</p>
        </div>
        <div className={styles.callToAction}>
          <h1>Start Optimizing Your Farm Today<br/>
          See How It <span>Works</span></h1>
          <button>Learn More</button>
        </div>
        </section>
      <section className={styles.introSection}>
        <div className={styles.introBanner}>
          <h1>Farming Smarter for a Resilient Future</h1>
        </div>
        <div className={styles.introSectionBody}>
          <p className={styles.introSectionBodyParagraph}>In 2024, Southern African farmers faced unprecedented crop losses due to unpredictable weather and a lack of tailored planning tools.<br/>
          Our AI-powered platform changes the game by helping you make informed decisions.<br/>
          From crop suggestions based on real-time weather insights to advanced tracking tools, we empower you to grow smarter, maximize yields,<br/> 
          and secure your farm’s future—no matter the challenges.</p>
          <div className={styles.introsectionBodyFeatures}>
            <div className={styles.featuresContainer}>
            <div className={styles.introSectionBodyFeature}>
              <div className={styles.introSectionBodyFeatureIcon}>
                <FontAwesomeIcon icon={faSeedling } fontSize="80px" color="#ffffffd0" />
              </div>
              <h5>AI-Powered Crop Suggestions</h5>
              <p>Get personalized crop suggestions based on your farm’s location, soil type, and weather conditions.</p>
              </div>
            <div className={styles.introSectionBodyFeature}>
              <div className={styles.introSectionBodyFeatureIcon}>
              <FontAwesomeIcon icon={faCloud} fontSize="80px" color="#ffffffd0"/>
              </div>
              <h5>Real-Time Weather Insights</h5>
              <p>Get accurate weather forecasts and insights to plan your farming activities effectively.</p>
              </div>
            <div className={styles.introSectionBodyFeature}>
              <div className={styles.introSectionBodyFeatureIcon}>
                <FontAwesomeIcon icon={faTractor} fontSize="80px" color="#ffffffd0"/>
              </div>
              <h5>Smart Farming Tools</h5>
              <p>Access advanced tools to track your farm’s performance, monitor crop health, and optimize your yields.</p>
            </div>
            <div className={styles.introSectionBodyFeature}>
              <div className={styles.introSectionBodyFeatureIcon}>
                <FontAwesomeIcon icon={faInfoCircle} fontSize="80px" color="#ffffffd0"/>
              </div>
              <h5>Expert Guidance</h5>
              <p>Connect with our team of experts for personalized advice and support to help you succeed.</p>
            </div>
            </div>
            
          </div>
          <div className={styles.IntroSectionBodyButtonDiv}>
            <Link to="/signup">
              <button className={styles.IntroSectionBodyButton}>Explore</button>
            </Link>
          </div>
        </div>
      </section>
    </div>




  )
}

export default LandingPage