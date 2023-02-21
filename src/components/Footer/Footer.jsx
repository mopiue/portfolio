import Logo from '../Logo/Logo'
import MediaGroupIcons from '../MediaGroup/MediaGroupIcons'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.leftSideTopPart}>
            <Logo fWeight={400} />
            <span>iamnucassi@gmail.com</span>
          </div>
          <span>Self-learning front-end developer</span>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSideContent}>
            <span>Media</span>
            <ul className={styles.rightSideSocials}>
              <li>
                <MediaGroupIcons />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className={styles.copyright}>
        © Copyright 2023. Made by Nucassi
      </span>
    </footer>
  )
}

export default Footer
