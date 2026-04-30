//React
import { useParams } from 'react-router-dom' /* Permite preencher a página
com os dados da api usando um paramentro como referencia o id em geral */
import { useState, useEffect } from 'react'

// Componentes
import ProductsListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/BannerPerfil'
import { cardapio } from '../Home'

// Imagens dos produtos
import HeaderPerfil from '../../components/HeaderPerfil'

//store
import { useGetRestaurantByIdQuery } from '../../store/api'

//Recebe o cardapio de Restaurante
export type tipoRestaurante = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  capa: string
  avaliacao: number
  cardapio: {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }[]
}
// // A props do componente
// export  Props = {
//   pratosDados: Prato[]
// }

const Perfil = () => {
  const { id } = useParams()
  //useState
  //const [menu, setMenu] = useState<cardapio[]>([])

  const { data: menu } = useGetRestaurantByIdQuery(id || '')

  //lendo a api
  // useEffect(() => {
  //   fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id} `)
  //     .then((res) => res.json())
  //     .then((res) => setMenu(res))
  // })

  if (!menu) {
    return <h3>Carregando ... </h3>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner />
      <ProductsListPerfil Cardapio={menu.cardapio} />
    </>
  )
}

export default Perfil
