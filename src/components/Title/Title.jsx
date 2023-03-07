import styled from '@emotion/styled'
import styles from './Title.module.css'

function Title({ title, lineWidth, marginBtm, titleDescription }) {
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
          <a href="#">View all {`~~>`}</a>
        ) : (
          ''
        )}
      </div>
      {titleDescription && (
        <p
          className={styles.titleDescription}
          style={{ marginBottom: titleDescription ? `${marginBtm}px` : '' }}
        >
          List of my projects
        </p>
      )}
    </>
  )
}

export default Title
