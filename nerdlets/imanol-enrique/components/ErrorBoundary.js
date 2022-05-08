// React
import { Component } from 'react'

// Librarys
import { Icon } from 'nr1'

export default class ErrorBoundary extends Component {
  isMounted = false
  state = {
    error: null,
  }

  componentDidMount() {
    this.isMounted = true
  }

  componentDidCatch(error) {
    // Capturar el error en caso se haya montado el componente
    this.isMounted && this.setState({ error: error.message })
  }

  componentWillUnmount() {
    this.isMounted = false
  }

  render() {
    if (this.state.error) {
      return (
        <div className="d-flex h-100 align-items-center justify-content-center  flex-column text-muted text-center">
          <Icon type={Icon.TYPE.INTERFACE__STATE__CRITICAL} className="mb-1 fs-4" />
          <h4 className="text-secondary">A ocurrido un error en la aplicación:</h4>
          <code className="col-10 mx-auto">{JSON.stringify(this.state.error)}</code>
        </div>
      )
    }

    return this.props.children
  }
}
