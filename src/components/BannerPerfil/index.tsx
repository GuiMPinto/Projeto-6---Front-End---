import { Imagem } from './styles'

import apresentacao from '../../assets/images/apresentacao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${apresentacao})` }} />
)

export default Banner
