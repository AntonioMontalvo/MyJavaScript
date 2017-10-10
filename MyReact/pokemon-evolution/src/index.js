import React from 'react'
import ReactDOM from 'react-dom'
import Evolution from './components/Evolution'
import './styles/app.scss'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}

render(Evolution)
if (module.hot) {
  module.hot.accept('./components/Evolution', () => { render(Evolution) })
}
