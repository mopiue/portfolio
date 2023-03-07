import { NavLink } from 'react-router-dom'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'

function Header() {
  const menuItems = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'works',
      link: '/works',
    },
    {
      name: 'about-me',
      link: '/aboutme',
    },
    {
      name: 'contacts',
      link: '/contacts',
    },
  ]

  const itemActive = {
    color: '#ffffff',
    fontWeight: 500,
    textDecoration: 'none',
    position: 'relative',
  }

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <div className={styles.headerMenu}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li className={styles.listItem} key={index}>
                <NavLink
                  className={styles.itemLink}
                  style={({ isActive }) => (isActive ? itemActive : undefined)}
                  to={item.link}
                >
                  {item.name}
                </NavLink>
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
