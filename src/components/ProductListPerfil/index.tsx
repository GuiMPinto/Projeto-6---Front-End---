import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'
import { cardapio } from '../../pages/Home'

//Recebe o cardapio de Restaurante
export interface Prato {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}
// A props do componente
export type Props = {
  pratos: cardapio[]
}

const ProductsList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((pratosPerfil) => (
          // Prodcut <= game.ts
          <ProductPerfil
            key={pratosPerfil.id}
            image={pratosPerfil.foto}
            nomePrato={pratosPerfil.nome}
            description={
              pratosPerfil.descricao.length
                ? pratosPerfil.descricao.slice(0, 150) + '...'
                : pratosPerfil.descricao
            }
          />
        ))}
      </List>
    </div>
  </Container>
) // ProductsList

export default ProductsList
