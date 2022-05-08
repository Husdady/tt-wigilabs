// React
import React, { useEffect, useReducer } from 'react'

// Context
import VelocityReducer from './Velocity.Reducer'
import VelocityContext from './Velocity.Context'

// Actions
import actions from './actions'

const VelocityState = ({ children }) => {
  const initialState = {
    min: 0,
    max: 100,
    velocity: '',
    cleanAutomaticUpdateVelocity: false,
  }

  // Declarar reducer
  const [state, dispatch] = useReducer(VelocityReducer, initialState)

  // Obtener acciones que actualizan el estado
  const { updateVelocity, updateAleatoryVelocity, uploadVelocityFromLocalStorage } = actions(dispatch)

  const contextValue = {
    ...state,
    // Actualizar velocidad
    updateVelocity: updateVelocity,
    // Actualizar velocidad con un valor aleatorio
    updateAleatoryVelocity: updateAleatoryVelocity,
  }

  useEffect(() => {
    let isMounted = true

    // Cargar velocidad guardada en LocalStorage si el componente a sido montado
    if (isMounted) {
      uploadVelocityFromLocalStorage()
    }

    return () => {
      isMounted = false
    }
  }, [])

  return <VelocityContext.Provider value={contextValue}>{children}</VelocityContext.Provider>
}

export default VelocityState
