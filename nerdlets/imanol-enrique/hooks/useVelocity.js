// React
import { useContext } from 'react'

// Context
import VelocityContext from '../context/Velocity.Context'

export default function useVelocity() {
  const context = useContext(VelocityContext)
  return context
}
