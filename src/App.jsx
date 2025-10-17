import { useState } from 'react'
import './App.css'
import BuildHeader from './assets/header/header.jsx'
import BuildContainerMenu from './assets/menu-panel/build_menu.jsx'

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
