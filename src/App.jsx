import { useState } from 'react'
import './App.css'
import { Sidebar, Home } from './components/index.js'

function App() {

  return (
    <div>
      <Sidebar />
      <Home />
    </div>
  )
}

export default App
