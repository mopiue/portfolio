import styles from './Contacts.module.css'
import PopupContainer from '../PopupContainer/PopupContainer'

function Contacts() {
  return (
    <div className={styles.contacts}>
      <PopupContainer
        cn={styles.contactsContainer}
        title={'contacts'}
        additionalLink={false}
        lineWidth={127}
        marginBtm={65}
      ></PopupContainer>
    </div>
  )
}

export default Contacts
