import Product from '../Product'
import { Container, List } from './styles'
import Game from '../../models/games'

export type Props = {
  games: Game[]
}

const ProductsList = ({ games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          // Prodcut <= game.ts
          <Product
            key={game.id}
            description={game.description}
            image={game.image}
            infos={game.infos}
            nomePrato={game.title}
            nota={game.nota}
          />
        ))}
      </List>
    </div>
  </Container>
) // ProductsList

export default ProductsList
