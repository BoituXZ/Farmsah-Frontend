
import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      {/* Header Section */}
      <motion.section
        className={styles.headerSection}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.description}>
          Have questions, feedback, or suggestions? We&apos;re here to help! Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
        </p>
      </motion.section>

      {/* Contact Methods */}
      <motion.section
        className={styles.contactMethods}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className={styles.subtitle}>Ways to Contact Us</h2>
        <ul className={styles.contactList}>
          <li>
            📧 <strong>Email:</strong> <a href="mailto:support@farmingapp.com" className={styles.link}>support@farmingapp.com</a>
          </li>
          <li>
            📞 <strong>Phone:</strong> +263 123 456 789
          </li>
          <li>
            📍 <strong>Office:</strong> 123 Farming Lane, Harare, Zimbabwe
          </li>
        </ul>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className={styles.formSection}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className={styles.subtitle}>Send Us a Message</h2>
        <form className={styles.contactForm}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input type="text" id="name" name="name" className={styles.input} placeholder="Your Name" required />

          <label htmlFor="email" className={styles.label}>Email:</label>
          <input type="email" id="email" name="email" className={styles.input} placeholder="Your Email" required />

          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea id="message" name="message" className={styles.textarea} placeholder="Your Message" rows="5" required></textarea>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </motion.section>
    </div>
  );
};

export default ContactUs;
