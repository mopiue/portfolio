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
    TR: {
      name: 'TR',
    },
  }

  const LangSwitcherItem = styled.li`
    &:not(:last-child) {
      ${Object.keys(langItems).length > 1
        ? 'border-bottom: 1px solid #abb2bf;'
        : ''}
    }
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
        <button
          className={styles.langSwitcher}
          onClick={handleLangSwitcherClick}
        >
          {active}
          <span
            style={{ transform: open ? 'rotate(-90deg)' : 'rotate(90deg)' }}
          >
            ❯
          </span>
        </button>
      </li>
      {open && (
        <div className={styles.langSwitcherPopup}>
          <ul className={styles.langSwitcherPopupContent}>
            {Object.values(langItems).map(
              (item, index) =>
                item.name !== active && (
                  <LangSwitcherItem
                    key={index}
                    onClick={handleLangSwitcherChange}
                  >
                    {item.name}
                  </LangSwitcherItem>
                )
            )}
          </ul>
        </div>
      )}
    </>
  )
}

export default LanguageSwitcher
