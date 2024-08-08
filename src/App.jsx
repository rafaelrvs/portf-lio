import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Presentation from './Components/Presentation/Presentation'

function App() {

  return (
    <>
    <Header/>
    <hr className="linha" />
    <Presentation/>

    </>
  )
}

export default App
