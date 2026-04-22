import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'
import { Restaurantes } from '../../pages/Home'
import PratosPerfil from '../../models/pratosPerfil'

// A props do componente
export type Props = {
  pratosPerfil: PratosPerfil[]
}

const ProductsList = ({ pratosPerfil }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratosPerfil.map((pratosPerfil) => (
          // Prodcut <= game.ts
          <ProductPerfil
            key={pratosPerfil.id}
            description={pratosPerfil.description}
            image={pratosPerfil.image}
            nomePrato={pratosPerfil.title}
          />
        ))}
      </List>
    </div>
  </Container>
) // ProductsList

export default ProductsList
