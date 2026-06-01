import { Route, Routes } from 'react-router-dom'

// Componentes
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Checkout from './pages/Checkout'
import Cartao from './pages/Cartao'
import Confirmacao from './pages/Confirmacao'
import Cart from './components/Cart'

// Cria os link ao clicar no botão usando o React Router Dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
    <Route path="/Checkout/" element={<Checkout />} />
    <Route path="/Cartao/" element={<Cartao />} />
    <Route path="/Confirmacao/" element={<Confirmacao />} />
    <Route path="/Cart/" element={<Cart />} />
  </Routes>
)

export default Rotas
