import { useState } from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'

function Header() {
  const [active, setActive] = useState({ current: 'home' })

  function handleLinkClick(item) {
    setActive({ current: item })
  }

  const menuItems = [
    {
      name: 'home',
      link: '#',
    },
    {
      name: 'works',
      link: '#',
    },
    {
      name: 'about-me',
      link: '#',
    },
    {
      name: 'contacts',
      link: '#',
    },
  ]

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerMenu}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li className={styles.listItem} key={index}>
              <a
                className={`${styles.itemLink}`}
                href={item.link}
                onClick={() => handleLinkClick(item.name)}
                style={
                  active.current === item.name
                    ? { color: '#FFFFFF', fontWeight: 500 }
                    : {}
                }
              >
                <span>#</span>
                {item.name}
              </a>
            </li>
          ))}
          <li className={`${styles.listItem} ${styles.lang}`}>
            <button className={styles.langSwitcher}>EN</button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
