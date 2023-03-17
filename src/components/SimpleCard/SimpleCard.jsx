import propTypes from 'prop-types'
import styled from '@emotion/styled'

import Button from '../Button/Button'
import withSimpleCard from '../../hocs/withSimpleCard'
import styles from './SimpleCard.module.css'

function SimpleCard(props) {
  const CardTitle = styled.span`
    ${props.contentTitle
      ? `font-weight: 400;
        font-size: 16px;
        color: #ABB2BF;`
      : `font-weight: 600;
        color: #ffffff;
        `}
    display: block;
    padding: 8px;
    border-bottom: 1px solid #abb2bf;
  `

  return (
    <>
      <div className={styles.card}>
        <CardTitle>{props.title}</CardTitle>
        <p className={styles.cardDescription}>
          {props.contentTitle && (
            <span className={styles.contentTitle}>{props.contentTitle}</span>
          )}
          {props.text}
        </p>
        {props.hasButton && (
          <div style={{ margin: '0 0 16px 16px' }}>
            <Button
              btnType={props.btnType}
              btnText={props.btnText}
              btnLink={props.btnLink}
            />
          </div>
        )}
      </div>
    </>
  )
}

SimpleCard.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}

export default SimpleCard = withSimpleCard(SimpleCard)
