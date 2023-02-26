import styled from '@emotion/styled'
import styles from './SectionTitle.module.css'

function SectionTitle({ title, lineWidth, marginBtm }) {
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
