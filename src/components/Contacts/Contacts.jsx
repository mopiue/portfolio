import styles from './Contacts.module.css'
import PopupContainer from '../PopupContainer/PopupContainer'

function Contacts() {
  return (
    <div className={styles.contacts}>
      <PopupContainer
        cn={styles.contactsContainer}
        title={'contacts'}
        lineWidth={127}
        marginBtm={45}
      >
        <p className={styles.contactsText}>
          I’m interested in freelance opportunities. However,
          <br /> if you have other request or question, don’t
          <br /> hesitate to contact me
        </p>
        <div className={styles.contactsInfo}>
          <h3>Message me here</h3>
          <div className={styles.socialElement}>
            <img
              className={styles.socialDiscord}
              src={`${process.env.PUBLIC_URL}/assets/images/contacts/discord.svg`}
              alt={'discrod'}
            />
            <span>Elias#3519</span>
          </div>
          <div className={styles.socialElement}>
            <img
              className={styles.socialMail}
              src={`${process.env.PUBLIC_URL}/assets/images/contacts/mail.svg`}
              alt={'mail'}
            />
            <span>elias@elias.me</span>
          </div>
        </div>
      </PopupContainer>
    </div>
  )
}

export default Contacts
