import Header from './components/Header/Header'
import MediaGroup from './components/Header/MediaGroup/MediaGroup'
import './App.css'

function App() {
  return (
    <>
      <MediaGroup />
      <div className="App">
        <Header />
        <div className="intro">
          <div className="intro__left-side">
            <h1 className="intro__who-is">
              Nucassi is a self-learning <span>front-end developer</span>
            </h1>
            <p className="intro__description">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button className="intro__contact-btn">Contact me !!</button>
          </div>
          <div className="intro__right-side">
            <div className="intro__logo">
              <img
                className="intro__logo-img"
                src={`${process.env.PUBLIC_URL}/assets/images/intro/logo.svg`}
                alt="logo"
              />
              <img
                className="intro__lines-img"
                src={`${process.env.PUBLIC_URL}/assets/images/others/linesInSquare.svg`}
                alt="logo"
              />
              <img
                className="intro__dots-img"
                src={`${process.env.PUBLIC_URL}/assets/images/others/dots.svg`}
                alt="logo"
              />
              <div className="intro__logo-banner">
                <span>
                  Currently working on <strong>Portfolio</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
