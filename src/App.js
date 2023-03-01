import { motion } from 'framer-motion'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <>
      <Intro />
      <motion.div
        className="quote"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <span className="quote__text">
          With great power comes great electricity bill
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/quote/quotes.svg`}
            alt=""
          />
        </span>
        <span className="quote__author">
          - Dr. Who
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/quote/quotes.svg`}
            alt=""
          />
        </span>
      </motion.div>
      <Projects />
      <Skills />
      <About />
      <Contacts />
    </>
  )
}

export default App
