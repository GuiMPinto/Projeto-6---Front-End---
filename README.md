## Pratica - Parte 2

Cada produto da lista da página HOME representa um restaurante ao clicar
no componente botão Saiba Mais deste produto. A aplicação vai para a página
PERFIL onde possui uma outra lista de produtos com os pratos deste restaurante.

Nesta Pratica será usado uma API externa para exibir os dados que serão
mostrados na aplicação ao invês de mocks usados como na prática anterior.

Os dados que preenche a lista de produtos de HOME e PERFIL são retirados de uma
API externa. Os dados dessa API é uma coleção de array com os dados do
restaurante sendo que o último dado é uma outra coleção de arrays no qual cada
array possui os dados de cada prato deste restaurante.

Foi criado o documento src/models/restaurantes.ts para receber os itens da Api
externa. O tipo criado tem que possuir em seus campos o mesmo nome dos campos
da API externa.

** Documentação mais detalhada dos códigos estão em seus respectivos documentos

src/models/restaurantes.ts
---------------------------------------------------------------------
export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

export interface Prato {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}
---------------------------------------------------------------------

Se abrir a API: 'https://api-ebac.vercel.app/api/efood' perceberá que os
campos de dados são os mesmos de src/models/restaurantes.ts .

Todas as requisição da aplicação feitas pelos componente
são configuradas no documento:

src/api/index.ts
------------------------------------------------------------------------------
// Biblioteoca do Redux Toolkit Query (RTK Query)
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Componentes
import { Restaurante } from '../models/restaurante'

export const api = createApi({
  reducerPath: 'api',
    baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),

  // endpoints = requisições
  endpoints: (builder) => ({

    getRestaurants: builder.query<Restaurante[], void>({
      query: () => ''
    }),

    getRestaurantById: builder.query<Restaurante, string | number>({
      query: (id) => `/${id}`
    })
  })
})
/*
  useGetRestaurantsQuery e useGetRestaurantByIdQuery: são os hooks
  gerado automaticos de dos endpoints getRestaurants e getRestaurantById.
*/
export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
------------------------------------------------------------------------------

Foi criada duas requisições de endereços um para a página inicial HOME e a outra
para o PERFIL. Lembrando que a HOME exibi a lista de restaurantes e o PERFIL a
lista de pratos deste restaurante.

Criado essas estrutura básicas necessárias vamos seguir a fluxo de programação
para entender melhor. Começando pelo documento pai src/App.tsx

src/App.tsx
----------------------------------------------------
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'

import { GlobalCss } from './styles'

// Componentes
import Footer from './components/Rodape'

import Rotas from './routes'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
----------------------------------------------------

Na aplicação a única parte que é alterada é o componente <Rotas /> onde
o cabeçalho e o corpo da aplicação é alterado em HOME e em PERFIL.
Inicialmente a aplicação inicia-se em HOME e ao clicar na botão do Card
de um restaurante a aplicação muda para a página PERFIL. Vamos ao
código do componente Rotas para entender melhor essa aplicação.

src/routes.tsx
--------------------------------------------------------------
import { Route, Routes } from 'react-router-dom'

// Componentes
import Home from './pages/Home'
import Perfil from './pages/Perfil'

// Cria os link ao clicar no botão usando o React Router Dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
--------------------------------------------------------------

Este documento é responsável por armazenar as páginas da aplicação e
o seus caminhos ou rotas de sua aplicação simulando um os caminhos de
uma aplicação em um servidor

Para diferenciar uma rota da outra basta usar algum paramentro para
definir em qualquer ponto da rota queira fazer a requisição.

O caminho inicial é a página HOME devido ao atributo "/" de path em
<Route path="/" element={<Home />} />. Vamos então ao seu respectivo
documento.

src/pages/Home/index.ts
-----------------------------------------------------
// Componentes
import ProductsList from '../../components/ProductList'
import Header from '../../components/Header'

// requisição da API para preencher as lista de restaurantes
import { useGetRestaurantsQuery } from '../../api'

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
-----------------------------------------------------

Para diferenciar uma rota da outra basta usar algum paramentro para
definir em qualquer ponto da rota queira fazer a requisição.

Para ler a requisição de Home foi criado o hook useGetRestaurantsQuery(),
em src/api/index.ts, que lê toda a API. pois a configuração desta
requisição não usou algum paramentro para selecionar algum ponto da rota.
O que será visto nos componentes Perfil e Modal.

No escopo de return os dados da api são enviados para preencher o componentes
que compôem o componente maior que é a lista de restaurante,do componente
ProducList através do objeto Restaurante já preenchido.

src/components/ProductList/index.tsx
-------------------------------------------------------------
// Componentes
import Product from '../Product'
import { Restaurante } from '../../models/restaurante' // Type de dados criado me Home

// CSS
import { Container, List } from './styles'

export type Props = {
  listaRestaurante: Restaurante[]
}

const ProductsList = ({ listaRestaurante }: Props) => (
  <Container>
    <div className="container">
      <List>
        {listaRestaurante.map((restaurante) => (
          // Prodcut <= restaurante.ts
          <Product
            id={restaurante.id}
            key={restaurante.id}
            description={restaurante.descricao}
            image={restaurante.capa}
            infos={restaurante.tipo}
            nomePrato={restaurante.titulo}
            nota={restaurante.avaliacao}
          />
        ))}
      </List>
    </div>
  </Container>
) // ProductsList

export default ProductsList
-------------------------------------------------------------

Se tudo estiver certo se rodar a aplicação agora a página inicial HOME
estara preenchido com os dados do objeto Restaurante.

O Próximo passo é fazer o componente botão do componente Product cuja
a exibição de sua coleção compôem o componente ProductList.

src/components/Product/index.tsx
--------------------------------------------------------------------
// Cada Produto se equivale a um Card
import Tag from '../Tag'
import Button from '../Button'

// Imagens
import estrela from '../../assets/images/star-solid-full.svg'

import { Card, CardImagem, Descricao, Infos, Titulo, Etiqueta } from './styles'

type Props = {
  id: number
  nomePrato: string
  description: string
  infos: string
  image: string
  nota: string
  link?: string
}

const Product = ({ id, description, infos, image, nomePrato, nota }: Props) => (
  <Card>
    <CardImagem src={image} alt={nomePrato} />
    <Infos>
      <Tag>{infos}</Tag>
    </Infos>
    <Etiqueta>
      <Titulo>{nomePrato}</Titulo>
      <div>
        <Titulo>{nota}</Titulo>
        <img src={estrela} />
      </div>
    </Etiqueta>
    <Descricao>{description}</Descricao>
    <Button type="link" to={`/perfil/${id}`}>
      Saiba Mais
    </Button>
  </Card>
)

export default Product
--------------------------------------------------------------------

Observe que o componente botão <Button type="link" to={`/perfil/${id}`}>
dentro da propriedade 'to' possui a mesma rota do componente Rotas do
documento routes.tsx

src/components/Product/index.tsx
--------------------------------------------------------------------
...
<Button type="link" to={`/perfil/${id}`}>
      Saiba Mais
</Button>
...
--------------------------------------------------------------------


src/routes.tsx
--------------------------------------------------------------
...
// Cria os link ao clicar no botão usando o React Router Dom
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil/:id" element={<Perfil />} />
  </Routes>
)
...
--------------------------------------------------------------


Ao clicar no botão do componente Product na página HOME a aplicação irá
mudar a Rota para as rota de Perfil/:id. Isso implica em mudar a exibição
de HOME para o PERFIL, o mesmo que mudar da página HOME para PERFIL.

src/pages/Pefil/index.tsx
---------------------------------------------------------------------------
//React
import { useParams } from 'react-router-dom'

// Componentes
import ProductsListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/BannerPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'

// Importa a requisição da api externa usada com o id no final
import { useGetRestaurantByIdQuery } from '../../api'

const Perfil = () => {
  const { id } = useParams()
  const { data: menu } = useGetRestaurantByIdQuery(id || '')

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
---------------------------------------------------------------------------

As rotas são estabelicidas na construção da API. Em PERFIL foi usado
em sua rota o parametro:'/id', atraves de:

import { useParams } from 'react-router-dom'
const { id } = useParams()


onde o 'id' é usado na requisição do hook:

useGetRestaurantByIdQuery(id || '')

do documento feito para receber as requisições: src/api/index.ts .
Cada item da lista de restaurante tem o seu próprio 'id'.

Caso o caminho path="/Perfil/:id" seja somente path="/:id". A barra
de endereço do indicará que o item que representa o restaurante foi
selecionado corretamente porém a sua aplicação que passa pelo
componente Perfil não aparecerá. Fica apenas o Header e o Rodapé.

Neste trecho de código:
<ProductsListPerfil Cardapio={menu.cardapio} />
é enviado para o componente ProducuctListPerfil apenas a lista de dados
dos pratos do restaurante que é um item da lista de restaurante nomeado
na API externa como cardapio.

Agora na página PERFIL já com a lista preenchida com os pratos do
restarante. A lista é o componente ProductListPerfil e o componente que
compõem a lista de pratos é o ProductPerfil.

------- Modal -------
Clicando no botão VER MAIS do componente ProductPerfil abrirá um modal
(um pop up) com algumas informações do array cardapio que comopõem cada
item da API.

Uma parte dos dados do array carpadio são exibidas no componente
ProductPerfil e a outro no Modal.

A aplicação do Modal consiste em deixar o Pop UP em uma camanda acima da
página Perfil mostrando os dados desejado dentro de um painel e entre este
Pop Up e o Perfil exiber um tela preta com pouca opacidade com o objetivo
de deixar o Pop em destaque.

Ao clicar no botão de fechar ao fora do Modal aplicação voltar a exibir
o componente de página Perfil.

Foi criado um componente separado para o Modal que é chamado pelo componente
ProductListPerfil.

O Modal é exibido ao mudar o seu estado para não visivel para vísivel quando
o botão VER MAIS é clicado.

Dentro do componente ProductListPerfil é adicionado um estado React para
determinar se o estado do Modal esteja visivel ou não. Inicialmente o estado
é iniciado como não vísivel e vazio.






.........................
É criado mais uma rota para exibir este modal. Então é acresentado o
''''<Route path="/Modal/:id" element={<Modal />} />'''' em

src/routes.tsx
--------------------------------------------------------------
''''''
  ........
''''''
--------------------------------------------------------------

E simultaneamente o documento:

src/components/Modal/index.tsx
--------------------------------------------------------------
''''''
  ........
''''''
--------------------------------------------------------------
