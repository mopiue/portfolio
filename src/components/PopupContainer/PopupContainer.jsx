import { motion } from 'framer-motion'
import Title from '../Title/Title'

function PopupContainer(props) {
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 0.8,
      },
    },
  }

  return (
    <>
      <motion.div
        variants={cardVariants}
        className={props.cn}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {props.children}
      </motion.div>
    </>
  )
}

export default PopupContainer
