import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Toaster, toast } from 'sonner'
import Menu from './pages/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster  position="bottom-right" richColors/>
      <Menu/>
    </>
  )
}

export default App
