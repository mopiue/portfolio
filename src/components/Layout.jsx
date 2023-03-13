import { Outlet } from 'react-router-dom'
import ScrollToTop from '../utils/scrollToTop'
import MediaGroup from './MediaGroup/MediaGroup'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout() {
  return (
    <>
      <div className="_background"></div>
      <div className="wrapper">
        <MediaGroup />
        <ScrollToTop />
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
