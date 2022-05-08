import useVelocity from './useVelocity'

export default function useAleatoryFloat() {
  const { min, max } = useVelocity()

  const aleatoryFloat = Math.random() * (max - min) + min
  return aleatoryFloat
}
