// Ferramenta reponsável por fazer o link para as páginas.
import { Link } from 'react-router-dom'

import { HeaderBar, LOGO, R_SOCIAIS } from './styles'

// imagens
import logo from '../../assets/images/efoodLogo.png'
import fundoHeader from '../../assets/images/fundoHeader.png'
import redeSociais from '../../assets/images/redes_sociais.png'

const Footer = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundoHeader})` }}>
    <div className="container">
      <Link to="/">
        <LOGO src={logo} alt="EFOOD" />
      </Link>
      <R_SOCIAIS src={redeSociais} alt="Rede Sociais" />
      <h1>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </h1>
    </div>
  </HeaderBar>
)

export default Footer
