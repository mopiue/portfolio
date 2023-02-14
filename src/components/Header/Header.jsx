import { useState } from 'react'
import styles from './Header.module.css'

function Header() {
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
    <div className={styles.header}>
      <div className={styles.headerLogo}>
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
            fill="white"
          />
        </svg>
        <span>Nucassi</span>
      </div>
      <div className={styles.headerMenu}>
        <ul className={styles.menuList}>
          {/* map menu items */}
          {menuItems.map((item, index) => (
            <li className={styles.listItem}>
              <a className={`${styles.itemLink}`} href={item.link}>
                <span>#</span>
                {item.name}
              </a>
            </li>
          ))}
          {/* <li className={styles.listItem}>
            <a
              className={`${styles.itemLink} ${active ? styles.active : ''}`}
              href="#"
              onClick={handleLinkClick}
            >
              <span>#</span>home
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={`${styles.itemLink} ${active ? styles.active : ''}`}
              href="#"
              onClick={handleLinkClick}
            >
              <span>#</span>works
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={`${styles.itemLink} ${active ? styles.active : ''}`}
              href="#"
              onClick={handleLinkClick}
            >
              <span>#</span>about-me
            </a>
          </li>
          <li className={styles.listItem}>
            <a
              className={`${styles.itemLink} ${active ? styles.active : ''}`}
              href="#"
              onClick={handleLinkClick}
            >
              <span>#</span>contacts
            </a>
          </li> */}
          <li className={`${styles.listItem} ${styles.lang}`}>
            <button className={styles.langSwitcher}>EN</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
