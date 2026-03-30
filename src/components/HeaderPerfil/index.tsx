// Ferramenta reponsável por fazer o link para as páginas.
import { Link } from 'react-router-dom'

import { HeaderBar } from './styles'

// imagens
import logo from '../../assets/images/efoodLogo.png'
import fundoHeader from '../../assets/images/fundoHeader.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoHeader})` }}>
    <div className="container">
      <h1>Restaurantes</h1>
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <h1>(0) pedidos no carrinho</h1>
    </div>
  </HeaderBar>
)

export default Header
