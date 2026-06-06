//React
import { useParams } from 'react-router-dom' /* Permite preencher a página
com determinados dados da api usando um paramentro como referencia.
Geralmente o paramentro 'id' é usado para isso */

// Componentes
import ProductsListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/BannerPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'
import Loader from '../../components/Loader'

// Importa a requisição da api externa usada com o id no final
import { useGetRestaurantByIdQuery } from '../../services/api'

type ID = {
  id: string
}
const Perfil = () => {
  const { id } = useParams() as ID

  // O menu é o objeto do tipo Restaurante carregado em
  // src/api/index.tsx.
  // Carrega os dados apenas com o paramentro id selecionado.
  const { data: pratosRestaurante, isLoading: carregandoMenu } =
    useGetRestaurantByIdQuery(id)
  if (!pratosRestaurante) {
    return <Loader />
  }
  return (
    <>
      <HeaderPerfil />
      <Banner
        capa={pratosRestaurante.capa}
        categoria={pratosRestaurante.tipo}
        nome={pratosRestaurante.titulo}
        carregando={carregandoMenu}
      />
      <ProductsListPerfil
        menu={pratosRestaurante.cardapio}
        carregando={carregandoMenu}
      />
    </>
  )
}

export default Perfil
