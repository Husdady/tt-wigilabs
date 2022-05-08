// React
import { useMemo } from 'react'

// Hooks
import useVelocity from './useVelocity'

// Obtener el estado de la velocidad ('Good' | 'Average' | 'Bad' | 'Very Bad')
export default function useVelocityStatus() {
  const { min, max, velocity } = useVelocity()

  // Obtener el nivel de velocidad
  const status = useMemo(() => {
    const num = Number(velocity)

    // Definir niveles dependiendo de la velocidad
    const levels = {
      good: min <= num && num <= 25,
      average: 25 < num && num <= 50,
      bad: 50 < num && num <= 75,
      veryBad: 75 < num && num <= max,
    }

    // Obtener keys
    const keys = Object.keys(levels)

    // Obtener la key que cumpla con la condición
    return keys.find((key) => !!levels[key])
  }, [velocity])

  // Retornar estado de Velocímetro
  return status
}
