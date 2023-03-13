import Title from '../components/Title/Title'
import PopupContainer from '../components/PopupContainer/PopupContainer'
import CardList from '../components/CardList/CardList'

function ContactsPage() {
  return (
    <div className="worksPage">
      <Title
        title="projects"
        titleDescription="List of my projects"
        marginBtm={69}
      />
      <Title title="complete-apps" marginBtm="48" />
      <PopupContainer>
        <CardList />
      </PopupContainer>
    </div>
  )
}

export default ContactsPage
