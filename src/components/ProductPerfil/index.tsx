// Cada Produto se equivale a um Card
import Button from '../Button'
import { Card, Descricao, CardContainer, Titulo } from './styles'

type Props = {
  nomePrato: string
  description: string
  image: string
}

const ProductPerfil = ({ description, image, nomePrato }: Props) => (
  <Card>
    <img src={image} alt={nomePrato} />
    <CardContainer>
      <Titulo>{nomePrato}</Titulo>
      <Descricao>{description}</Descricao>
      <Button type="link" to="/">
        Adicionar ao Carrinho
      </Button>
    </CardContainer>
  </Card>
)

export default ProductPerfil
