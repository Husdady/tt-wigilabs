// React
import { useEffect, useState, useCallback, useMemo } from 'react'

// Librarys
import { toast } from 'react-hot-toast'

// Hooks
import useVelocity from '../../hooks/useVelocity'
import useVelocityStatus from '../../hooks/useVelocityStatus'

const messages = {
  good: () => toast.success('Su velocidad es estable'),
  bad: () => toast.error('¡Su velocidad es muy alta!'),
  veryBad: () => toast.error('¡Exceso de velocidad!'),
  average: () =>
    toast('¡Advertencia!, su velocidad es inestable', {
      icon: '⚠',
    }),
}

const Entry = () => {
  const status = useVelocityStatus()
  const { min, max, velocity, updateVelocity } = useVelocity()
  const [value, setValue] = useState(velocity)

  // Mensaje de 'placeholder'
  const placeholder = useMemo(() => {
    const message = `Ingresa una cantidad entre ${min} - ${max}`
    return message
  }, [])

  // Mensaje de 'placeholder'
  const inputValue = useMemo(() => {
    return value !== null ? value.toString() : value
  }, [value])

  // Comprobar si es un valor numérico
  const handleNumericValues = useCallback((e) => {
    const regx = /[0-9]/
    const isNumericValue = regx.test(e.key)

    // Si no es un valor numérico, prevenir comportamiento por defecto
    if (!isNumericValue) e.preventDefault()
  }, [])

  // Evento 'click' en tecla Enter
  const handlePressEnter = useCallback(
    (e) => {
      const isEnterKey = e.key === 'Enter'
      if (!isEnterKey) return

      // Actualizar velocidad
      updateVelocity(value)
    },
    [value],
  )

  // Evento 'onChange' que actualiza el valor de 'value'
  const handleChange = useCallback(
    (e) => {
      // Obtener el valor actual
      const currentValue = Number(e.target.value)

      // Comprobar si el valor actual está entre los valores permitidos
      const isBetweenTheValidValues = min <= currentValue && currentValue <= max
      if (!isBetweenTheValidValues) return

      // Setear nueva velocidad
      setValue(e.target.value)
    },
    [value],
  )

  useEffect(() => {
    // Obtener la acción a ejecutar dependiendo del estado de Velocímetro
    const action = messages[status]

    if (velocity !== '') action()
  }, [status])

  return (
    <div id="entry" className="pt-2 pb-3 px-4">
      <input
        type="number"
        id="quantity"
        name="quantity"
        placeholder={placeholder}
        className="rounded-4 fs-5 text-center px-4"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleNumericValues}
        onKeyDown={handlePressEnter}
      />
    </div>
  )
}

export default Entry
