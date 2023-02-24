import styled from '@emotion/styled'
import styles from './SectionTitle.module.css'

function SectionTitle({ title, additionalLink, lineWidth }) {
  const SectionTitleText = styled.h2`
    position: relative;
    color: #ffffff;
    span {
      color: #c778dd;
    }
    &::after {
      content: '';
      display: inline-block;
      width: ${lineWidth}px;
      top: 50%;
      left: 100%;
      margin-left: 16px;
      position: absolute;
      height: 1px;
      background-color: #c778dd;
    }
  `
  return (
    <div className={styles.sectionTitle}>
      <SectionTitleText>
        <span>#</span>
        {title}
      </SectionTitleText>
      {additionalLink ? <span>View all {`~~>`}</span> : ''}
    </div>
  )
}

export default SectionTitle
