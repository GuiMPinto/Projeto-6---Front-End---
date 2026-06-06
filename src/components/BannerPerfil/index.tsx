//COMPONENTES
import Loader from '../Loader'

//CSS
import { Imagem, Titulo } from './styles'

type Props = {
  nome?: string
  categoria?: string
  capa?: string
  carregando: boolean
}

const Banner = ({ nome, categoria, capa, carregando }: Props) => {
  if (carregando) {
    return <Loader />
  }
  return (
    <Imagem style={{ backgroundImage: `url(${capa})` }}>
      <div className="container">
        <h3> {categoria}</h3>
        <Titulo>{nome}</Titulo>
      </div>
    </Imagem>
  )
}

export default Banner
