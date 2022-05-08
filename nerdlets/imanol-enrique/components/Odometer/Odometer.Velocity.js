// React
import { useMemo } from 'react'

// Hooks
import useVelocity from '../../hooks/useVelocity'

const OdometerVelocity = () => {
  const { velocity } = useVelocity()

  // Definir el valor del Velocímetro
  const value = useMemo(() => {
    return Number(velocity).toFixed(2)
  }, [velocity])

  return <span className="mt-4 d-block fw-bold text-center velocity">{value}%</span>
}

export default OdometerVelocity
