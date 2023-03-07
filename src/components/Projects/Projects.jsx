import { useEffect, useState } from 'react'
import Title from '../Title/Title'
import PopupContainer from '../PopupContainer/PopupContainer'
import CardList from '../CardList/CardList'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section className={styles.projects}>
      <Title title="projects" lineWidth={511} marginBtm={48}></Title>
      <PopupContainer>
        <CardList currentPage="home" />
      </PopupContainer>
    </section>
  )
}

export default Projects
