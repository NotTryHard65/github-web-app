import { useState } from 'react'
import '../../assets/styles/App.css'
import BuildHeader from './header.jsx'
import BuildContainerMenu from './base.jsx'

function App() {

  return (
    <>
      <header>
        <BuildHeader  />
      </header>
      <main>
        <BuildContainerMenu /> 
      </main>
    </>
  )
}

export default App
