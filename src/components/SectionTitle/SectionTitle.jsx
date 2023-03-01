import styled from '@emotion/styled'
import styles from './SectionTitle.module.css'

function SectionTitle({ title, lineWidth, marginBtm }) {
  const SectionTitleText = styled.h2`
    &::after {
      width: ${lineWidth}px;
    }
  `
  return (
    <div
      className={styles.sectionTitle}
      style={{ marginBottom: `${marginBtm}px` }}
    >
      <SectionTitleText>
        <span>#</span>
        {title}
      </SectionTitleText>
      {title === 'projects' ? <a href="#">View all {`~~>`}</a> : ''}
    </div>
  )
}

export default SectionTitle
