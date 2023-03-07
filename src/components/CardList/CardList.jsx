import { useState, useEffect } from 'react'
import styles from './CardList.module.css'
import cards from '../../data/cards.json'

function CardList({ currentPage }) {
  const cardsPerPage = currentPage === 'home' ? 3 : cards.length

  return (
    <div className="projects__cards-container">
      {cards.map(
        (card, index) =>
          card.id <= cardsPerPage && (
            <div className={styles.card} key={index}>
              <div className={styles.cardImage}>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/cards/${card.image}`}
                  alt={card.title}
                />
              </div>
              <div className={styles.cardStack} style={{ height: 'auto' }}>
                <span>{card.stack}</span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>{card.title}</span>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>
              <div className={styles.cardActions}>
                <button className={`${styles.btnLive} ${styles.buttons}`}>
                  Live ᐉ
                </button>
                <button className={`${styles.btnGithub} ${styles.buttons}`}>
                  GitHub ≥
                </button>
              </div>
            </div>
          )
      )}
    </div>
  )
}

export default CardList
