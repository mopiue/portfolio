import styled from '@emotion/styled'
import styles from './SectionTitle.module.css'

function SectionTitle({ title, lineWidth, marginBtm, titleDescription }) {
  const SectionTitleText = styled.h2`
    &::after {
      width: ${lineWidth}px;
    }
  `
  return (
    <>
      <div
        className={styles.sectionTitle}
        style={{
          marginBottom: `${marginBtm}px`,
          marginTop: titleDescription ? '53px' : '',
        }}
      >
        <SectionTitleText>
          <span>{titleDescription ? '/' : '#'}</span>
          {title}
        </SectionTitleText>
        {title === 'projects' ? <a href="#">View all {`~~>`}</a> : ''}
      </div>
      {titleDescription && (
        <p className={styles.sectionTitleDescription}>List of my projects</p>
      )}
    </>
  )
}

export default SectionTitle
