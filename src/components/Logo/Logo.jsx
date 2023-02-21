import styles from './Logo.module.css'

function Logo({ fWeight }) {
  return (
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
      <span style={{ fontWeight: fWeight }}>Nucassi</span>
    </div>
  )
}

export default Logo