
import styles from "./AboutUs.module.css";
import { motion } from 'framer-motion'; // For animations

const About = () => {
  return (
    <div className={styles.aboutPageContainerMain}>
    <div className={styles.aboutContainer}>
      {/* Page 1: Introduction */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>Welcome to Our Farming Revolution</h1>
        <p className={styles.description}>
          Agriculture is the backbone of many communities in Southern Africa, but it faces significant challenges. Our app is here to change the game by using cutting-edge technology to address issues like climate change, resource management, and infrastructure gaps. 
        </p>
        <p className={styles.description}>
          Whether you&apos;re a seasoned farmer or just starting out, this platform provides the tools you need to make informed decisions, maximize yields, and plan for the future. 
        </p>
      </motion.section>

      {/* Page 2: Features */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className={styles.subtitle}>Key Features</h2>
        <ul className={styles.list}>
          <li>🌾 **Smart Farm Management:** Log farm size, crops planted, and track yields.</li>
          <li>☁️ **AI-Driven Insights:** Receive crop suggestions based on climate data and weather reports.</li>
          <li>📊 **Data-Driven Decisions:** Access analytics to optimize your farming strategies.</li>
          <li>🌍 **Sustainability Focus:** Tools to reduce waste and promote eco-friendly practices.</li>
        </ul>
        <p className={styles.description}>
          Our app integrates seamlessly with local farming conditions, ensuring solutions that are practical, scalable, and impactful.
        </p>
      </motion.section>

      {/* Page 3: Our Vision */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className={styles.subtitle}>Our Vision</h2>
        <p className={styles.description}>
          We envision a future where farmers across Southern Africa thrive in harmony with their environment. By leveraging advanced technology, we aim to:
        </p>
        <ul className={styles.list}>
          <li>📈 Enhance productivity and profitability for small and large farms alike.</li>
          <li>🌍 Build resilience against climate unpredictability.</li>
          <li>🤝 Foster a community of farmers who share knowledge and resources.</li>
          <li>🚀 Promote innovation in agriculture and sustainable practices.</li>
        </ul>
        <p className={styles.description}>
          Join us on this journey to transform agriculture and ensure food security for generations to come.
        </p>
      </motion.section>
    </div>
    </div>
  );
};

export default About;
