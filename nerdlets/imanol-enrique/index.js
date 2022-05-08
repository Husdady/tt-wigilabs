// React
import { Suspense, lazy } from 'react'

// Components
import Loading from './components/Loading'
import ErrorBoundary from './components/ErrorBoundary'
import VelocityState from './context/Velocity.State'

// Lazy Components
const Speedometer = lazy(() => import('./components/Speedometer'))

const AppNerdlet = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <VelocityState>
          <Speedometer />
        </VelocityState>
      </ErrorBoundary>
    </Suspense>
  )
}

export default AppNerdlet
