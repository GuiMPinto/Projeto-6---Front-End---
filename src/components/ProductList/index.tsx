// Componentes
import Product from '../Product'
import { Restaurante } from '../../models/restaurante' // Type de dados criado me Home

// CSS
import { Container, List } from './styles'

export type Props = {
  listaRestaurante: Restaurante[]
}

const ProductsList = ({ listaRestaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {listaRestaurante.map((restaurante) => (
          // Prodcut <= restaurante.ts
          <Product
            id={restaurante.id}
            key={restaurante.id}
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={restaurante.tipo}
            nomePrato={restaurante.titulo}
            nota={restaurante.avaliacao}
          />
        ))}
      </List>
    </div>
  </Container>
) // ProductsList

export default ProductsList
