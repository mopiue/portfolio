import Title from '../components/Title/Title'
import PopupContainer from '../components/PopupContainer/PopupContainer'
import CardList from '../components/CardList/CardList'

function ContactsPage() {
  return (
    <div className="contactsPage">
      <Title
        title="projects"
        titleDescription="List of my projects"
        marginBtm={69}
      ></Title>
      <Title title="complete-apps" marginBtm="48" />
      <PopupContainer
        title="contacts"
        marginBtm="69"
        titleDescription="List of my projects"
      >
        <CardList />
      </PopupContainer>
    </div>
  )
}

export default ContactsPage
