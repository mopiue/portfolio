import Title from '../Title/Title'
import PopupContainer from '../PopupContainer/PopupContainer'
import SimpleCard from '../SimpleCard/SimpleCard'
import skillsSimpleCards from '../../data/skillsSimpleCards.json'
import styles from './Skills.module.css'

function Skills() {
  return (
    <section className={styles.skills}>
      <Title title={'skills'} lineWidth="239" marginBtm="24"></Title>
      <PopupContainer cn={styles.skillsContainer}>
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
          {skillsSimpleCards.map((card) => (
            <SimpleCard key={card.id} title={card.title} text={card.text} />
          ))}
        </div>
      </PopupContainer>
    </section>
  )
}

export default Skills
