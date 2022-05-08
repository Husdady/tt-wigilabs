// React
import { memo } from 'react'

// Components
import Entry from './Message.Entry'
import Status from './Message.Status'

const Message = () => {
  return (
    <div id="message" className="shadow col-lg-5 col-sm-12 overflow-hidden">
      {/* Estado del Cuentakilómetros */}
      <Status />

      {/* Entrada para establecer una cantidad */}
      <Entry />
    </div>
  )
}

export default memo(Message)
