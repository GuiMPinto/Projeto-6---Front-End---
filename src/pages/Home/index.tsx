// Componentes
import ProductsList from '../../components/ProductList'
import Header from '../../components/Header'

// React
import { useState, useEffect } from 'react'

// Interface criada para complementar o campo do tipo
// Restaurantes que possui array de string campo cardapio
export interface cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
// Tipo para ler os dados da API. Os campos tem
// que ser os da API externa
export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: string
  descricao: string
  capa: string
  cardapio: string[]
}

const Home = () => {
  // Estado(State), que recebe a API
  const [restaurante, setRestaurante] = useState<Restaurantes[]>([])

  useEffect(() => {
    // Promoções
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  })

  return (
    <>
      <Header />
      <ProductsList listaRestaurante={restaurante} />
    </>
  )
}

export default Home
