import styles from './Button.module.css'

function Button({ btnType, btnText, btnLink }) {
  let btnAdditionalClass, btnSymbol

  switch (btnType) {
    case 'btnLive':
      btnAdditionalClass = styles.btnLive
      btnSymbol = '<~>'
      break

    case 'btnGithub':
      btnAdditionalClass = styles.btnGithub
      btnSymbol = '>='
      break
  }

  return (
    <a className={`${styles.buttons} ${btnAdditionalClass}`} href={btnLink}>
      <span>{`${btnText} ${btnSymbol}`}</span>
    </a>
  )
}

export default Button
