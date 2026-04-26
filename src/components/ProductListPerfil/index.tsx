import ProductPerfil from '../ProductPerfil'
import { Container, List } from './styles'
import { cardapio } from '../../pages/Home'
import { Pratos } from '../../pages/Perfil'
//Recebe o cardapio de Restaurante

// A props do componente
export type Props = {
  pratos: Pratos[] // tente colocar cardapio invês de Pratos
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
