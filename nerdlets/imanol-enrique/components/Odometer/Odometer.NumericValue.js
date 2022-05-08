// Librarys
import PropTypes from 'prop-types'

const OdemeterNumericValue = ({ value, style }) => {
  return (
    <span className="numeric-value position-absolute" style={style}>
      {value}
    </span>
  )
}

export default OdemeterNumericValue

OdemeterNumericValue.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
}
