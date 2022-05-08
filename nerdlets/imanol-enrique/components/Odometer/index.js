// React
import { memo } from 'react'

// Components
import OdometerBar from './Odometer.Bar'
import OdometerStatus from './Odometer.Status'
import OdometerVelocity from './Odometer.Velocity'
import OdometerIndicator from './Odometer.Indicator'
import OdometerNumericValue from './Odometer.NumericValue'

const bars = require('../../assets/json/bars.json')
const status = require('../../assets/json/status.json')
const numericValues = require('../../assets/json/numeric-values.json')

// Renderizar barras en Velocímetro
const renderStatus = status.map((el, i) => <OdometerStatus key={i} {...el} />)

// Renderizar barras en Velocímetro
const renderBars = bars.map((bar, i) => <OdometerBar key={i} {...bar} />)

// Renderizar valores numéricos en Velocímetro
const renderNumericValues = numericValues.map((numericValue, i) => <OdometerNumericValue key={i} {...numericValue} />)

const Odometer = () => {
  return (
    <div id="odometer" className="mt-5 d-table position-relative">
      {/* Estados del Velocímetro */}
      {renderStatus}

      <div className="wrapper d-flex align-items justify-content-center position-relative overflow-hidden">
        {/* Indicador de Velocímetro */}
        <div className="indicator-wrapper position-absolute d-flex align-items-center justify-content-center">
          {/* Valores numéricos de Velocímetro */}
          {renderNumericValues}

          <div className="indicator-wrapper-inner">
            <OdometerIndicator />
          </div>
        </div>

        {/* Barras de Velocímetro */}
        {renderBars}
      </div>

      {/* Velocidad de Velocímetro */}
      <OdometerVelocity />
    </div>
  )
}

export default memo(Odometer)
