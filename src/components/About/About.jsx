import Title from '../Title/Title'
import PopupContainer from '../PopupContainer/PopupContainer'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <Title title={'about-me'} lineWidth={326} marginBtm={23}></Title>
      <PopupContainer cn={styles.aboutContainer}>
        <div className={styles.aboutLeftSide}>
          <p className={styles.aboutText}>
            Hello, i’m Nucassi! <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            quisquam culpa recusandae aliquid debitis non consequatur. Sequi eum
            quae perspiciatis quibusdam harum explicabo. Deserunt esse voluptate
            cum, blanditiis at odit dolorum hic pariatur corrupti suscipit autem
            a, atque repellendus optio soluta nisi molestias voluptatem maiores
            labore? Adipisci, illum eos. <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
            perspiciatis, officia perferendis, laudantium voluptatem molestiae
            quisquam quidem nemo voluptatibus reprehenderit eum. Vero, facere
            similique natus labore rem illo eos nam!
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
