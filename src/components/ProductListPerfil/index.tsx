// componentes
import ProductPerfil from '../ProductPerfil'
import Modal from '../Modal'

//React
import { useState } from 'react' // usando na Modal

// Styled Components
import { Container, List } from './styles'

//Recebe o cardapio de Restaurante
export interface Cardapio {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Props = {
  cardapio: Cardapio[]
}
const ProductsListPerfil = ({ cardapio }: Props) => {
  //Estado Inicial do Modal
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as Cardapio | null
  })

  return (
    <Container>
      <div className="container">
        <List>
          {cardapio.map((pratosPerfil) => (
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
              onOpen={() => setModal({ isVisible: true, data: pratosPerfil })}
            />
          ))}
        </List>
        <Modal
          product={modal.data}
          isVisible={modal.isVisible}
          onClose={() => setModal({ isVisible: false, data: null })}
        />
      </div>
    </Container> // ProductsList
  )
}

export default ProductsListPerfil
