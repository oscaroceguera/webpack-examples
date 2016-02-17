import React from 'react'
import Hello from './components.jsx'
import ReactDom from 'react-dom'
import '../public/styles/estilo.styl'

ReactDom.render(
  <Hello />,
  document.getElementById('root')
)
