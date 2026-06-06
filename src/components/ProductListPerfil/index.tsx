// componentes
import ProductPerfil from '../ProductPerfil'
import Modal from '../Modal'

//React
import { useState } from 'react' // usando na Modal

// Styled Components
import { Container, List } from './styles'
import Loader from '../Loader'

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
  menu?: Cardapio[]
  carregando: boolean
}
const ProductsListPerfil = ({ menu, carregando }: Props) => {
  //Estados React que habilita o Modal
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as Cardapio | null
  })

  if (carregando) {
    return <Loader />
  }
  return (
    <Container>
      <div className="container">
        <List>
          {menu &&
            menu.map((pratosPerfil) => (
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
