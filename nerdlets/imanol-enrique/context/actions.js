// Types
import * as types from './types'

export default function (dispatch) {
  return {
    // Actualizar velocidad
    updateVelocity: function (newVelocity) {
      // Guardar velocidad en LocalStorage
      localStorage.setItem(types.SAVE_VELOCITY_IN_LOCALSTORAGE, newVelocity)

      return dispatch({
        type: types.UPDATE_VELOCITY,
        payload: newVelocity,
      })
    },

    // Actualizar velocidad con un valor aleatorio
    updateAleatoryVelocity: function (newVelocity) {
      return dispatch({
        type: types.UPDATE_WITH_ALEATORY_VELOCITY,
        payload: newVelocity,
      })
    },

    // Cargar velocidad guardada en LocalStorage
    uploadVelocityFromLocalStorage: function (newVelocity) {
      // Obtener valor de velocidad guardada en LocalStorage
      const velocitySaved = localStorage.getItem(types.SAVE_VELOCITY_IN_LOCALSTORAGE)

      // Si no existe una velocidad guardada en LocalStorage, finalizar función
      if (velocitySaved === null) return

      return dispatch({
        type: types.UPLOAD_VELOCITY_FROM_LOCALSTORAGE,
        payload: velocitySaved,
      })
    },
  }
}
