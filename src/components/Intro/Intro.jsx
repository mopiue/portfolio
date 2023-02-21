import styles from './Intro.module.css'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.introLeftSide}>
        <h1 className={styles.introWhoIs}>
          Nucassi is a self-learning
          <span>
            <TypeAnimation
              sequence={[
                1000,
                '',
                1000,
                'front',
                1000,
                '-end',
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
        <div>
          <img
            className={styles.introLogoImg}
            src={`${process.env.PUBLIC_URL}/assets/images/intro/logo.svg`}
            alt="logo"
          />
          <img
            className={styles.introLinesImg}
            src={`${process.env.PUBLIC_URL}/assets/images/others/linesInSquare.svg`}
            alt="logo"
          />
          <img
            className={styles.introDotsImg}
            src={`${process.env.PUBLIC_URL}/assets/images/others/dots.svg`}
            alt="logo"
            // animate={{
            //   scale: [1, 2, 2, 1, 1],
            //   rotate: [0, 0, 270, 270, 0],
            //   // borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            // }}
          />
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
