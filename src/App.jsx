
import './App.css'
import Inicio from './Inicio'
import ThemeProvider from './context/ThemeProvider'

function App() {

    let tituloPrincipal = "Vite + React"
    
   
  return (
    
    <ThemeProvider>

      <Inicio  tituloPrincipal={tituloPrincipal}  />|
    
    </ThemeProvider>

  )
}

export default App
