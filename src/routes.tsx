import { Route, Routes } from 'react-router-dom'

// Componentes
import Home from './pages/Home'
import Perfil from './pages/Perfil'

// Cria os link ao clicar no botão usando o React Router Dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil" element={<Perfil />} />
  </Routes>
)

export default Rotas
