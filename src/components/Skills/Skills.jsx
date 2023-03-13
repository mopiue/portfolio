import Title from '../Title/Title'
import PopupContainer from '../PopupContainer/PopupContainer'
import withCard from '../../utils/hoc/withSimpleCard'
import styles from './Skills.module.css'

function Skills() {
  const Card = withCard((props) => ({ ...props }))

  return (
    <section className={styles.skills}>
      <Title title={'skills'} lineWidth={239} marginBtm={24}></Title>
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
          <Card title="Languages" text="TypeScript PHP JavaScript"></Card>
          <Card title="Databases" text="PostgreSQL Mongo"></Card>
          <Card title="Tools" text="VSCode Figma Git"></Card>
          <Card title="Other" text="HTML CSS EJS SCSS"></Card>
          <Card title="Frameworks" text="React Express.js"></Card>
        </div>
      </PopupContainer>
    </section>
  )
}

export default Skills
