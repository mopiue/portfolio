import Title from '../Title/Title'
import PopupContainer from '../PopupContainer/PopupContainer'
import ImageCardList from '../ImageCardList/ImageCardList'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section className={styles.projects}>
      <Title title="projects" lineWidth="511" marginBtm="48" />
      <PopupContainer>
        <ImageCardList currentPage="home" />
      </PopupContainer>
    </section>
  )
}

export default Projects
