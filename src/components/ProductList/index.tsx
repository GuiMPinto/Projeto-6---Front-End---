// Componentes
import Product from '../Product'
import { Restaurantes } from '../../pages/Home' // Type de dados criado me Home

// CSS
import { Container, List } from './styles'

export type Props = {
  listaRestaurante: Restaurantes[]
}

const ProductsList = ({ listaRestaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {listaRestaurante.map((restaurante) => (
          // Prodcut <= restaurante.ts
          <Product
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
