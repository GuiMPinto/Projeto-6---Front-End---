// Cada Produto se equivale a um Card
import Tag from '../Tag'
import Button from '../Button'

import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  nomePrato: string
  description: string
  infos: string[] //tags
  image: string
}

const Product = ({ description, infos, image, nomePrato }: Props) => (
  <Card>
    <img src={image} alt={nomePrato} />
    <Infos>
      {infos.map((info) => (
        /*
          O atributo key={info} é muito importante no React quando você
          está renderizando listas de elementos, por exemplo usando .map().
          A key serve para ajudar o React a identificar quais itens mudaram,
          foram adicionados ou removidos, melhorando a performance e evitando
          bugs na renderização.

          O uso da prop key acontece normalmente quando estamos iterando
          sobre um array (neste caso, infos é um array de strings), e precisamos
          renderizar múltiplos componentes a partir dele.
        */
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{nomePrato}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="link" to="/perfil">
      Saiba Mais
    </Button>
  </Card>
)

export default Product
