import { Imagem, Titulo } from './styles'

type Props = {
  nome: string
  categoria: string
  capa: string
}

const Banner = ({ nome, categoria, capa }: Props) => (
  <Imagem style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <h3> {categoria}</h3>
      <Titulo>{nome}</Titulo>
    </div>
  </Imagem>
)

export default Banner
