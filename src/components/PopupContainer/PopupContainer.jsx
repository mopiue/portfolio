import { motion } from 'framer-motion'
import SectionTitle from '../SectionTitle/SectionTitle'

function PopupContainer(props) {
  return (
    <>
      <SectionTitle
        title={props.title}
        additionalLink={props.additionalLink}
        lineWidth={props.lineWidth}
        marginBtm={props.marginBtm}
      ></SectionTitle>
      <motion.div
        className={props.cn}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {props.children}
      </motion.div>
    </>
  )
}

export default PopupContainer
