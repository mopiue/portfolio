import styles from './MediaGroup.module.css'
import MediaGroupIcons from './MediaGroupIcons'

function MediaGroup() {
  return (
    <div className={styles.mediaGroup}>
      <div className={styles.strip} />
      <div className={styles.socials}>
        <ul>
          <li className={styles.socialsItem}>
            <MediaGroupIcons />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MediaGroup
