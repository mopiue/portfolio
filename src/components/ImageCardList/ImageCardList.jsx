import propTypes from 'prop-types'
import styles from './ImageCardList.module.css'
import cards from '../../data/projectsCards.json'
import Button from '../Button/Button'

function ImageCardList({ currentPage }) {
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
                <Button btnType="btnLive" btnLink="#" btnText="Live" />
                <Button btnType="btnGithub" btnLink="#" btnText="Github" />
              </div>
            </div>
          )
      )}
    </div>
  )
}

ImageCardList.propTypes = {
  currentPage: propTypes.string,
}

export default ImageCardList
