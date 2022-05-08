// Librarys
import PropTypes from 'prop-types'

const OdometerStatus = ({ name, style }) => {
  const barStyle = {
    ...style,
    zIndex: 500,
  }

  return (
    <span className="status position-absolute" style={barStyle}>
      {name}
    </span>
  )
}

export default OdometerStatus

OdometerStatus.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
}
