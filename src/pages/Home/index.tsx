// Componentes
import ProductsList from '../../components/ProductList'
import Header from '../../components/Header'
import Loader from '../../components/Loader'

// requisição da API para preencher as lista de restaurantes
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  //Restaurante é o tipo de dados já preenchido com os dados da API
  const { data: Restaurante, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Header />
      <ProductsList listaRestaurante={Restaurante} isLoading={isLoading} />
    </>
  )
}

export default Home
