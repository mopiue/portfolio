import Title from '../Title/Title'
import PopupContainer from '../PopupContainer/PopupContainer'
import styles from './Contacts.module.css'

function Contacts() {
  return (
    <section className={styles.contacts}>
      <Title title={'contacts'} lineWidth={127} marginBtm={45}></Title>
      <PopupContainer cn={styles.contactsContainer}>
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
    </section>
  )
}

export default Contacts
