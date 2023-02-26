import styles from './About.module.css'
import PopupContainer from '../PopupContainer/PopupContainer'

function About() {
  return (
    <section className={styles.about}>
      <PopupContainer
        cn={styles.aboutContainer}
        title={'about-me'}
        lineWidth={326}
        marginBtm={23}
      >
        <div className={styles.aboutLeftSide}>
          <p className={styles.aboutText}>
            Hello, i’m Elias! <br />
            <br />
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. <br />
            <br />
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className={styles.aboutButton}>Read more {`🠖`}</button>
        </div>

        <div className={styles.aboutImage}>
          <div className={styles.foregroundDots}></div>
          <div className={styles.foregroundWiderDots}></div>
        </div>
      </PopupContainer>
    </section>
  )
}

export default About
