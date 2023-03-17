import Title from '../components/Title/Title'
import PopupContainer from '../components/PopupContainer/PopupContainer'
import ImageCardList from '../components/ImageCardList/ImageCardList'
import SimpleCard from '../components/SimpleCard/SimpleCard'
import worksSimpleCards from '../data/worksSimpleCards'

function WorksPage() {
  return (
    <div className="worksPage">
      <Title
        title="projects"
        titleDescription="List of my projects"
        marginBtm="69"
      />
      <Title title="complete-apps" marginBtm="48" />
      <PopupContainer>
        <ImageCardList />
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
            {worksSimpleCards.map((card) => (
              <SimpleCard
                key={card.id}
                title={card.title}
                text={card.text}
                contentTitle={card.contentTitle}
                hasButton={card.hasButton}
                btnType={card.btnType}
                btnLink={card.btnLink}
                btnText={card.btnText}
              />
            ))}
          </div>
        </PopupContainer>
      </div>
    </div>
  )
}

export default WorksPage
