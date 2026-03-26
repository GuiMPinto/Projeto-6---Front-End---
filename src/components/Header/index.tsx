// Ferramenta reponsável por fazer o link para as páginas.
import { Link } from 'react-router-dom'

import { HeaderBar } from './styles'

// imagens
import logo from '../../assets/images/efoodLogo.png'
import fundoHeader from '../../assets/images/fundoHeader.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoHeader})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="EFOOD" />
      </Link>
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </div>
  </HeaderBar>
)

export default Header
