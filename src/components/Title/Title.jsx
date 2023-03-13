import styled from '@emotion/styled'
import styles from './Title.module.css'
import { Link } from 'react-router-dom'

function Title({ title, titleDescription, lineWidth, marginBtm }) {
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
          marginTop: titleDescription ? '53px' : '',
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
          style={{ marginBottom: titleDescription ? `${marginBtm}px` : '' }}
        >
          {titleDescription}
        </p>
      )}
    </>
  )
}

export default Title
