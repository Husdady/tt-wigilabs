// Types
import * as types from './types'

const VelocityReducer = (state, action) => {
  switch (action.type) {
    // Actualizar velocidad
    case types.UPDATE_VELOCITY:
      return {
        ...state,
        velocity: action.payload,
        cleanAutomaticUpdateVelocity: true,
      }

    // Actualizar velocidad con un valor aleatorio
    case types.UPDATE_WITH_ALEATORY_VELOCITY:
      return {
        ...state,
        velocity: action.payload,
      }

    // Cargar velocidad guardad en LocalStorage
    case types.UPLOAD_VELOCITY_FROM_LOCALSTORAGE:
      return {
        ...state,
        velocity: action.payload,
        cleanAutomaticUpdateVelocity: false,
      }

    default:
      return state
  }
}

export default VelocityReducer
