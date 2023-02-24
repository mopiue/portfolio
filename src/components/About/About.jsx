import styles from './About.module.css'
import PopupContainer from '../PopupContainer/PopupContainer'

function About() {
  return (
    <div className={styles.about}>
      <PopupContainer
        cn={styles.aboutContainer}
        title={'about-me'}
        additionalLink={false}
        lineWidth={326}
      ></PopupContainer>
    </div>
  )
}

export default About
