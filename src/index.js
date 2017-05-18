import React from 'react'
import { render } from 'react-dom'
import { Login } from './components/Login'

window.React = React

render(
    <Login />,
    document.getElementById('react-container')
)
