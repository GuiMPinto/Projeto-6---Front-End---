// Componentes
import ProductsList from '../../components/ProductList'
import Header from '../../components/Header'

// requisição da API para preencher as lista de restaurantes
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  //Restaurante é o tipo de dados já preenchido com os dados da API
  const { data: Restaurante } = useGetRestaurantsQuery()
  // Mensagem lida ao rodar aplicação
  if (!Restaurante) {
    return <h3>Carregando restaurantes...</h3>
  }
  return (
    <>
      <Header />
      <ProductsList listaRestaurante={Restaurante} />
    </>
  )
}

export default Home
