import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

function Logo({ fWeight }) {
  return (
    <div className={styles.headerLogo}>
      <Link to="/" className={styles.headerLink}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
        <span style={{ fontWeight: fWeight }}>Nucassi</span>
      </Link>
    </div>
  )
}

export default Logo
