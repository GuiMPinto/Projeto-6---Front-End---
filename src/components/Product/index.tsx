// Cada Produto se equivale a um Card
import Tag from '../Tag'
import Button from '../Button'

import estrela from '../../assets/images/star-solid-full.svg'

import { Card, CardImagem, Descricao, Infos, Titulo, Etiqueta } from './styles'

type Props = {
  id: number
  nomePrato: string
  description: string
  infos: string
  image: string
  nota: string
}

const Product = ({ id, description, infos, image, nomePrato, nota }: Props) => (
  <Card>
    <CardImagem src={image} alt={nomePrato} />
    <Infos>
      <Tag>{infos}</Tag>
    </Infos>
    <Etiqueta>
      <Titulo>{nomePrato}</Titulo>
      <div>
        <Titulo>{nota}</Titulo>
        <img src={estrela} />
      </div>
    </Etiqueta>
    <Descricao>{description}</Descricao>
    <Button type="link" to={`/perfil/${id}`}>
      Saiba Mais
    </Button>
  </Card>
)

export default Product
