import { useState } from 'react'
import './App.css'
import Primeiro from './componentes/Primeiro'
import Segundo from './componentes/Segundo'
import { BoaNoite, BoaTarde } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from "./componentes/Pai"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Ham tomanocu
        <Primeiro></Primeiro>
        <Segundo nome='Rodrigo'></Segundo>
        <BoaTarde apelido="Chupeta de baleia"></BoaTarde>
        <BoaNoite apelido='O mais Sagaz'></BoaNoite>
        <hr />
        <Saudacao tipo='Bom dia' nome='Joao'></Saudacao>
        <hr />
        <Pai></Pai>
      </div>
      
    </>
  )
}

export default App
