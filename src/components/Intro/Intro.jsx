import styles from './Intro.module.css'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introLeftSide}>
        <h1 className={styles.introWhoIs}>
          Nucassi is a self-taught
          <span>
            <TypeAnimation
              sequence={[
                1000,
                '',
                1000,
                'front',
                1000,
                'end',
                1000,
                'front-end developer',
                5000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </h1>
        <motion.p
          className={styles.introDescription}
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          He crafts responsive websites where technologies meet creativity
        </motion.p>
        <motion.button
          className={styles.introContactBtn}
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact me !!
        </motion.button>
      </div>
      <motion.div
        className={styles.introRightSide}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.introImages}>
          <div className={styles.introLogoImg}></div>
          <div className={styles.introLinesImg}></div>
          <div className={styles.introDotsImg}></div>
          <div className={styles.introLogoBanner}>
            <span>
              Currently working on <strong>Portfolio</strong>
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Intro
