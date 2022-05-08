// React
import { useEffect, lazy } from 'react'

// Librarys
import { Toaster } from 'react-hot-toast'

// Hooks
import useVelocity from '../hooks/useVelocity'
import useAleatoryFloat from '../hooks/useAleatoryFloat'

// Lazy Components
const Message = lazy(() => import('./Message'))
const Odometer = lazy(() => import('./Odometer'))

const WAIT_TIME_TO_UPDATE_VELOCITY = 2000

const Speedometer = () => {
  const aleatoryFloat = useAleatoryFloat()
  const { velocity, updateAleatoryVelocity, cleanAutomaticUpdateVelocity } = useVelocity()

  useEffect(() => {
    // Obtener la nueva velocidad aleatoria
    const newVelocity = aleatoryFloat.toString()

    // Setear intervalo que actualiza la velocidad cada 'WAIT_TIME_TO_UPDATE_VELOCITY' segundos
    const interval = setInterval(() => {
      updateAleatoryVelocity(newVelocity)
    }, WAIT_TIME_TO_UPDATE_VELOCITY)

    // Limpiar intervalo cuando se ingresa un valor en input
    if (cleanAutomaticUpdateVelocity) {
      clearInterval(interval)
    }

    return () => {
      // Limpiar intervalo al desmontar componente
      clearInterval(interval)
    }
  }, [velocity, cleanAutomaticUpdateVelocity])

  return (
    <main id="app" className="p-5">
      {/* Entrada de mensaje */}
      <Message />

      {/* Cuentakilómetros */}
      <Odometer />

      {/* Toaster */}
      <Toaster />
    </main>
  )
}

export default Speedometer
