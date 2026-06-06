// Ferramenta reponsável por fazer o link para as páginas.
import { Link } from 'react-router-dom'

import { HeaderBar, IMAGEM } from './styles'

// imagens
import logo from '../../assets/images/efoodLogo.png'
import fundoHeader from '../../assets/images/fundoHeader.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoHeader})` }}>
    <div className="container">
      <Link to="/">
        <h1>
          <IMAGEM src={logo} alt="EFOOD" />
        </h1>
      </Link>
      <h2>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h2>
    </div>
  </HeaderBar>
)

export default Header
