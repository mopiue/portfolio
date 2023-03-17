function withSimpleCard(Component) {
  return function SimpleCard(props) {
    return <Component {...props} />
  }
}

export default withSimpleCard
