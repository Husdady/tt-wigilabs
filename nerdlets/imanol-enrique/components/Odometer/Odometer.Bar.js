// Librarys
import PropTypes from 'prop-types'

const OdometerBar = ({ style, className, barColor }) => {
  const defaultClasses = 'bar w-100 h-100 position-absolute'
  const odometerBarClasses = [defaultClasses, className].join(' ')
  const barStyle = {
    ...style,
    backgroundColor: barColor,
  }

  return <div className={odometerBarClasses} style={barStyle}></div>
}

export default OdometerBar

OdometerBar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  barColor: PropTypes.string,
}
