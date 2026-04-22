## Pratica - Parte 2

Cada produto da lista da página HOME representa um restaurante ao clicar
em um restaurante. A aplicação vai para a página PERFIL onde para cada
restaurante de HOME a lista de produtos(pratos) de Perfil muda.

Na Página PERFIL clicando no botão SAIBA MAIS abrirá um modal com os
detalhes deste produto.

Nesta Pratica será usado uma API externa para exibir os dados que
serão mostrados na aplicação ao invês de mocks.

Primeiro passo vamos a página HOME onde será criado o objeto que receberá
os dados da API externa que tem a lista de restaurantes e também a API
Os campos deste objeto são os mesmos da API.


O Objeto dentro de Home:

----------------------------------------------------
// Interface criada para complementar o campo do
// tipo Restaurantes que possui array de string
// campo cardapio
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
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: string[]
}
----------------------------------------------------

A leitura será da API será feita pelos dois hooks do React o
useState e o useEffect.

---------------------------------------------------------------------
import { useState, useEffect } from 'react'


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
---------------------------------------------------------------------

Em <ProductsList listaRestaurante={restaurante} />;  listaRestaurant é
a props do componente ProductsList que recebe o tipo objeto que recebe
os dados da API e {restaurante} e o estado atual deste objeto.


---------------------------------------------
import ProductPerfil from '../ProductPerfil'

export type Props = {
  pratosPerfil: PratoPerfil[]
}
---------------------------------------------

A props do componente ProductsListPerfil e uma lista dos dado do componente
PratoPerfil

No componente da página Perfil será criado a estrura de dados da props do
componente ProductsListPerfil.  é um array que recebe
da


O Modal criado ao clicar no botão saiba mais de cada produto
