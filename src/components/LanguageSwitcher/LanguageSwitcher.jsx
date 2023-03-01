import { useState } from 'react'
import styled from '@emotion/styled'
import styles from './LanguageSwitcher.module.css'

function LanguageSwitcher() {
  const [open, setIsOpen] = useState(false)
  const [active, setActive] = useState('EN')

  const langItems = {
    EN: {
      name: 'EN',
    },
    RU: {
      name: 'RU',
    },
  }

  const LangSwitcher = styled.button`
    &::after {
      transform: ${open ? 'rotate(-90deg);' : 'rotate(90deg)'};
    }
  `

  const ArrowSwitcher = styled.span`
    transform: ${open ? 'rotate(-90deg);' : 'rotate(90deg)'};
  `

  function handleLangSwitcherClick() {
    setIsOpen(!open)
  }

  function handleLangSwitcherChange(e) {
    setActive(e.target.textContent)
    setIsOpen(false)
  }

  return (
    <>
      <li>
        <LangSwitcher
          className={styles.langSwitcher}
          onClick={handleLangSwitcherClick}
        >
          {active}
          <ArrowSwitcher>❯</ArrowSwitcher>
        </LangSwitcher>
      </li>
      {open && (
        <div className={styles.langSwitcherPopup}>
          <ul className={styles.langSwitcherPopupContent}>
            {Object.values(langItems).map(
              (item, index) =>
                item.name !== active && (
                  <li onClick={handleLangSwitcherChange} key={index}>
                    {item.name}
                  </li>
                )
            )}
          </ul>
        </div>
      )}
    </>
  )
}

export default LanguageSwitcher
