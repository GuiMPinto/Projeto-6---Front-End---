import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'
import PratoPerfil from '../../models/pratosPerfil'

export type Props = {
  pratosPerfil: PratoPerfil[]
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
