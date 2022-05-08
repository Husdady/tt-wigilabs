// React
import { useMemo } from 'react'

// Hooks
import useVelocityStatus from '../../hooks/useVelocityStatus'

const colors = {
  good: '#7ae39f',
  average: '#ffe109',
  bad: '#ff6767',
  veryBad: '#ed0b0b',
}

const Status = () => {
  const status = useVelocityStatus()

  // Definir el color del estado
  const statusStyle = useMemo(() => {
    return { backgroundColor: colors[status] }
  }, [status])

  return <div id="status" style={statusStyle} />
}

export default Status
