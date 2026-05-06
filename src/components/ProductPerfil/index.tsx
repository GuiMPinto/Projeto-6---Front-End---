// Cada Produto se equivale a um Card
import {
  Card,
  Descricao,
  CardContainer,
  Titulo,
  BotaoAdicionar
} from './styles'

type Props = {
  nomePrato: string
  description: string
  image: string
  onOpen: () => void
}

const ProductPerfil = ({ description, image, nomePrato, onOpen }: Props) => (
  <Card>
    <img src={image} alt={nomePrato} />
    <CardContainer>
      <Titulo>{nomePrato}</Titulo>
      <Descricao>{description}</Descricao>
      <BotaoAdicionar onClick={onOpen}>Saiba Mais</BotaoAdicionar>
    </CardContainer>
  </Card>
)

export default ProductPerfil
