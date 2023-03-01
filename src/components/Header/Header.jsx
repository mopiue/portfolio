import { useState } from 'react'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
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
      link: '/',
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
      link: '/contacts',
    },
  ]

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.headerMenu}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li className={styles.listItem} key={index}>
                <Link
                  className={`${styles.itemLink}`}
                  to={item.link}
                  onClick={() => handleLinkClick(item.name)}
                  style={
                    active.current === item.name
                      ? { color: '#FFFFFF', fontWeight: 500 }
                      : {}
                  }
                >
                  <span>#</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </header>
    </>
  )
}

export default Header
