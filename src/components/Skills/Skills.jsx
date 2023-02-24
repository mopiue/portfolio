import { motion } from 'framer-motion'
import styles from './Skills.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'

function Skills() {
  return (
    <div className={styles.skills}>
      <SectionTitle title={'skills'} lineWidth={239} />
      <motion.div
        className={styles.skillsContainer}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.abstractions}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/others/dots.svg`}
            alt="dots"
            className={`${styles.dots_o} ${styles.abstraction}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/others/square.svg`}
            alt="square"
            className={`${styles.square_o} ${styles.abstraction}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/others/linesInSquare.svg`}
            alt="lines"
            className={`${styles.lines} ${styles.abstraction}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/others/dots.svg`}
            alt="dots"
            className={`${styles.dots_t} ${styles.abstraction}`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/others/square.svg`}
            alt="square"
            className={`${styles.square_t} ${styles.abstraction}`}
          />
        </div>
        <div className={styles.knowledge}>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Languages</span>
            <p className={styles.cardDescription}>TypeScript PHP JavaScript</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Databases</span>
            <p className={styles.cardDescription}>PostgreSQL Mongo</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Tools</span>
            <p className={styles.cardDescription}>VSCode Figma Git</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Other</span>
            <p className={styles.cardDescription}>HTML CSS EJS SCSS</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardTitle}>Frameworks</span>
            <p className={styles.cardDescription}>React Express.js</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
