import Title from '../components/Title/Title'
import PopupContainer from '../components/PopupContainer/PopupContainer'
import CardList from '../components/CardList/CardList'
import withCard from '../utils/hoc/withSimpleCard'

function WorksPage() {
  const Card = withCard((props) => ({ ...props }))

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
      <div>
        <Title title="small-projects" marginBtm="48" marginTop="81" />
        <PopupContainer>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              flexBasis: '66%',
              gap: '10px',
            }}
          >
            <Card
              title="Small Card"
              text="This is a small card."
              contentTitle="My blog"
              hasButton="true"
              btnType="btnLive"
              btnLink="#"
              btnText="GitHub"
            />
            <Card
              title="Small Card"
              text="This is a small card."
              contentTitle="My blog"
              hasButton="true"
              btnType="btnLive"
              btnLink="#"
              btnText="GitHub"
            />
            <Card
              title="Small Card"
              text="This is a small card."
              contentTitle="My blog"
              hasButton="true"
              btnType="btnLive"
              btnLink="#"
              btnText="GitHub"
            />
            <Card
              title="Small Card"
              text="This is a small card."
              contentTitle="My blog"
              hasButton="true"
              btnType="btnLive"
              btnLink="#"
              btnText="GitHub"
            />
          </div>
        </PopupContainer>
      </div>
    </div>
  )
}

export default WorksPage
