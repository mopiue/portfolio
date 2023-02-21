import { useEffect, useState } from 'react'
import styles from './Projects.module.css'
import { motion } from 'framer-motion'

const sameHeightCardStack = false

function Projects() {
  const [height, setHeight] = useState({})

  useEffect(() => {
    const arrHeights = []

    const allCardStack = document.getElementsByClassName(styles.cardStack)
    for (let index = 0; index < allCardStack.length; index++) {
      if (sameHeightCardStack) {
        arrHeights.push(allCardStack[index].offsetHeight)
        setHeight({ height: Math.max.apply(null, arrHeights) + 'px' })
      } else {
        setHeight({ height: 'auto' })
      }
    }
  }, [])

  return (
    <div className={styles.projects}>
      <div className={styles.projectsTitle}>
        <h2 className={styles.projectsTitleText}>
          <span>#</span>projects
        </h2>
        <span>View all {`~~>`}</span>
      </div>
      <motion.div
        className={styles.cardContainer}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/projectsCard/imageCard1.jpg`}
              alt="Image1"
            />
          </div>
          <div className={styles.cardStack} style={height}>
            <span>React Express Discord.js</span>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>ProjectX</span>
            <p className={styles.cardDescription}>Discord anti-crash bot</p>
          </div>
          <div className={styles.cardActions}>
            <button
              className={`${styles.btnLive} ${styles.buttons}`}
            >{`Live ᐉ`}</button>
            <button className={`${styles.btnGithub} ${styles.buttons}`}>
              {`GitHub ≥`}
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/projectsCard/imageCard1.jpg`}
              alt="Image1"
            />
          </div>
          <div className={styles.cardStack} style={height}>
            <span>React Express Discord.js Node.js</span>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>ProjectX</span>
            <p className={styles.cardDescription}>
              Discord anti-crash bot Discord anti-crash bot Discord anti-crash
              bot
            </p>
          </div>
          <div className={styles.cardActions}>
            <button
              className={`${styles.btnLive} ${styles.buttons}`}
            >{`Live ᐉ`}</button>
            <button className={`${styles.btnGithub} ${styles.buttons}`}>
              {`GitHub ≥`}
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/projectsCard/imageCard1.jpg`}
              alt="Image1"
            />
          </div>
          <div className={styles.cardStack} style={height}>
            <span>React Express Discord.js Node.js HTML SCSS Python Flask</span>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>ProjectX</span>
            <p className={styles.cardDescription}>Discord anti-crash</p>
          </div>
          <div className={styles.cardActions}>
            <button
              className={`${styles.btnLive} ${styles.buttons}`}
            >{`Live ᐉ`}</button>
            <button className={`${styles.btnGithub} ${styles.buttons}`}>
              {`GitHub ≥`}
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/projectsCard/imageCard1.jpg`}
              alt="Image1"
            />
          </div>
          <div className={styles.cardStack} style={height}>
            <span>React Express Discord.js Node.js HTML SCSS Python Flask</span>
          </div>
          <div className={styles.cardContent}>
            <span className={styles.cardTitle}>ProjectX</span>
            <p className={styles.cardDescription}>
              Discord anti-crash bot Discord anti-crash bot Discord anti-crash
              bot
            </p>
          </div>
          <div className={styles.cardActions}>
            <button
              className={`${styles.btnLive} ${styles.buttons}`}
            >{`Live ᐉ`}</button>
            <button className={`${styles.btnGithub} ${styles.buttons}`}>
              {`GitHub ≥`}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
