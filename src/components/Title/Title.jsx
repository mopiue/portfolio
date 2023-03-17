import { Link } from 'react-router-dom'
import propTypes from 'prop-types'
import styled from '@emotion/styled'

import styles from './Title.module.css'

function Title({ title, titleDescription, lineWidth, marginBtm, marginTop }) {
  const TitleText = styled.h2`
    &::after {
      width: ${lineWidth}px;
    }
  `

  return (
    <>
      <div
        className={styles.title}
        style={{
          marginBottom: !titleDescription ? `${marginBtm}px` : '',
          marginTop: titleDescription ? '53px' : `${marginTop}px`,
        }}
      >
        <TitleText>
          <span>{titleDescription ? '/' : '#'}</span>
          {title}
        </TitleText>
        {title === 'projects' && !titleDescription ? (
          <Link to="/works">View all {`~~>`}</Link>
        ) : (
          ''
        )}
      </div>
      {titleDescription && (
        <p
          className={styles.titleDescription}
          style={{
            marginBottom: titleDescription ? `${marginBtm}px` : '',
          }}
        >
          {titleDescription}
        </p>
      )}
    </>
  )
}

Title.propTypes = {
  title: propTypes.string.isRequired,
  titleDescription: propTypes.string,
  lineWidth: propTypes.string,
  marginBtm: propTypes.string,
  marginTop: propTypes.string,
}

export default Title
