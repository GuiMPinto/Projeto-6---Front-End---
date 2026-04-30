import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'
//Recebe o cardapio de Restaurante

type Props = {
  Cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}
const ProductsList = ({ Cardapio }: Props) => (
  <Container>
    <div className="container">
      <List>
        {Cardapio.map((pratosPerfil) => (
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
