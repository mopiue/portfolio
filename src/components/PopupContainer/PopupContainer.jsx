import propTypes from 'prop-types'
import { motion } from 'framer-motion'

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

PopupContainer.propTypes = {
  cn: propTypes.string,
  children: propTypes.node.isRequired,
}

export default PopupContainer
