import { Imagem, Titulo } from './styles'

import apresentacao from '../../assets/images/apresentacao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${apresentacao})` }}>
    <div className="container">
      <h3> italiana </h3>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner
