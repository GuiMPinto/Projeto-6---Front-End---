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
import { useParams } from 'react-router-dom' /* Permite preencher a página
com determinados dados da api usando um paramentro como referencia.
Geralmente o paramentro 'id' é usado para isso */

// Componentes
import ProductsListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/BannerPerfil'
import HeaderPerfil from '../../components/HeaderPerfil'

// Importa a requisição da api externa usada com o id no final
import { useGetRestaurantByIdQuery } from '../../api'

const Perfil = () => {
  const { id } = useParams()

  // O menu é o objeto do tipo Restaurante carregado em
  // src/api/index.tsx.
  // Carrega os dados apenas com o paramentro id selecionado.
  const { data: pratosRestaurante } = useGetRestaurantByIdQuery(id || '')

  if (!pratosRestaurante) {
    return <h3>Carregando ... </h3>
  }

  return (
    <>
      <HeaderPerfil />
      <Banner />
      <ProductsListPerfil menu={pratosRestaurante.cardapio} />
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
<ProductsListPerfil menu={pratosRestaurante.cardapio} />
é enviado para o componente ProducuctListPerfil apenas a lista de dados
dos pratos do restaurante que é um item da lista de restaurante nomeado
na API externa como cardapio.

Agora na página PERFIL já com a lista preenchida com os pratos do
restarante. A lista é o componente ProductListPerfil e o componente que
compõem a lista de pratos é o ProductPerfil.

------- Modal -------
Clicando no botão SAIBA MAIS do componente ProductPerfil abrirá um modal
(um pop up) com algumas informações do campo cardapio que comopõem cada
item da API.

Uma parte dos dados do array carpadio são exibidas no componente
ProductPerfil e a outro no Modal.

A aplicação do Modal consiste em deixar o Pop UP em uma camanda acima da
página Perfil mostrando os dados desejado dentro de um painel e entre este
Pop Up e o Perfil é exibido um tela preta com pouca opacidade com o objetivo
de deixar o Pop em destaque. Esta tela preta é tratada como o overlay no
documento styles do componente Modal.

Ao clicar no botão de fechar ou fora do Modal a aplicação voltar a exibir
o componente de página Perfil.

O Modal foi criado como um componente separado ele é chamado pelo componente
ProductListPerfil.

src/components/ProductListPerfil
---------------------------------------------------------------------------
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
  menu: Cardapio[]
}
const ProductsListPerfil = ({ menu }: Props) => {

  //Estado Inicial de 2 estados da Modal
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as Cardapio | null
  })

  return (
    <Container>
      <div className="container">
        <List>
          {menu.map((pratosPerfil) => (
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
---------------------------------------------------------------------------


O Modal é exibido ao mudar o seu estado para não visivel e vazio para vísivel
e com dados para o Modal quando o botão SAIBA MAIS é clicado. Isto é feito via
CSS usando o styled component. A div que é o container que abrange o componente
Modal é configurada com o display: none e clicando no botão, é mudado o valor
do display para flex através da habilitação da classe CSS nomeada como visivel.

A habilitação dessa classe é feita usando o useState do React para mudar alterar
os dois seguintes estados. Um estado que determina se o Modal vísivel ou não e o
outro se esta preenchido ou não. Sempre que o Modal estiver visivel ele estará
com conteúdo e sempre que estiver invisivel ele estara sem conteúdo. Resultando
apenas em duas combinações entre estes estados.

O estado inicial do Modal é invisivel e não preenchido para mudar para visivel
e preenchido o componente ProductListPerfil envia a função
onOpen={() => setModal({ isVisible: true, data: pratosPerfil })}
para o componente ProductPerfil tem o botão SAIBA MAIS que ao ser clicado
vai acionar a função onOpen() que habilita o Modal.


src/components/ProductPerfil
-------------------------------------------------------------
// Cada Produto se equivale a um Card
import {
  Card,
  Descricao,
  CardContainer,
  Titulo,
  BotaoAdicionar
} from './styles'

type Props = {
  nomePrato: string
  description: string
  image: string
  onOpen: () => void
}

const ProductPerfil = ({ description, image, nomePrato, onOpen }: Props) => (
  <Card>
    <img src={image} alt={nomePrato} />
    <CardContainer>
      <Titulo>{nomePrato}</Titulo>
      <Descricao>{description}</Descricao>
      <BotaoAdicionar onClick={onOpen}>Saiba Mais</BotaoAdicionar>
    </CardContainer>
  </Card>
)

export default ProductPerfil
-------------------------------------------------------------


Resumindo o funcionamento do Modal:
O ProductListPerfil exibe um Modal quando o botão de ProductPerfil é
acionado. O modal ira exibir os dados do ProductPerfil no qual o
botão SAIBA MAIS foi clicado.


# Projeto 6 - parte 3 -

Será acrescentado ao cart de compras os pratos desejados. No cart será
exibido os pratos adicionados atravês do botão ADICIONAR AO CARRINHO do
componente Modal.

No cart terá a opção de remover um produto da lista, e continuar comprando.

Como será feita uma simulção de um servidor junto ao Redux sera usado a
tecnologia Redux Toolkit. Assim será criado um store e as suas pastas e
arquivos típicos de seu projeto. Para simular as requições HTTP será criada
uma pasta service com os seus documentos que farão estas implementações.

Criaremos a pasta store com o seu index que é o RootRducer da aplicação.
Dentro de store tema a pasta reducers onde estará todos os reducers da
implementação. No caso desta aplicação será apenas o reducer do carrinho
de compras.

Desta forma a implementação dos estados as requisições HTTPs se comunicarão pois
trabalhão juntos.


As requisições HTTPs da aplicação são configuradas na api e o acionamento destas
são feitas através das actions disparada pelos componentes. Lembrando que as
requisições são responsáveis por preencher os dados da aplicação que estão em
uma api externa.

src/api/index.ts
-----------------------------------------------------------------------
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Componentes
import { Restaurante } from '../models/restaurante'

/
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
export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
-----------------------------------------------------------------------



O RootReducer:

src/store/index.ts
------------------------------------------------------------------
import { configureStore } from '@reduxjs/toolkit'

import { api } from '../api'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
------------------------------------------------------------------



No reducer do carrinho é configurada todas as actions disparadas
que mudaram o componente Cart que pode ser diparados por todos os componentes.


src/store/reducers/carrinhoCompras.ts
-------------------------------------------------------------------
// Redux ToolKit
// createSlice: uma função que recebe um objeto
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Componentes
import { Prato } from '../../models/restaurante'

type PratoState = {
  items: Prato[]
  isOpen: boolean // determina se o Cart estara aberto
}

const initialState: PratoState = {
  items: [], //array onde ficam armazenados os ojetos do tipo Prato
  isOpen: false
}

//cartSlice : um pedaço de um estado
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // um objeto que possui as funções que vão alterar este o carrinho de compras
  // estas funções podem ser consideradas como actions, que serão disparadas
  // pelos dispatchs
  reducers: {
    // função de adicionar um item ao carrinho de compras.
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((items) => items.id === action.payload.id)

      if (prato === undefined) {
        state.items.push(action.payload) //Inseri os objetos do Tipo Prato em items
      } else {
        alert('O Jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
-------------------------------------------------------------------


O Componente Cart

src/components/Cart
-------------------------------------------------------------
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
// importa as actions do Reducer do carrinhoCompras
import { close, remove } from '../../store/reducers/carrinhoCompras'

import Button from '../Button'
import { formataPreco } from '../../utils/formatacao'
import {
  CartContainer,
  Overlay,
  SideBar,
  CartItem,
  Price,
  CartCloseButton
} from './styles'

const Cart = () => {
  // state.carroCompras <--- store/index
  const { items, isOpen } = useSelector(
    (state: RootReducer) => state.carroCompras
  )

  const dispatch = useDispatch()

  //função para fechar o Cart
  const closeCart = () => {
    dispatch(close())
  }

  //função para remover um item do carrinho de Compras
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getValorTotal = () => {
    return items.reduce((acumulador, item) => {
      return acumulador + item.preco
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <div className="close-button">
          <CartCloseButton onClick={closeCart}></CartCloseButton>
        </div>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <button
                onClick={() => removeItem(item.id)}
                type="button"
              ></button>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <p>{formataPreco(getValorTotal())}</p>
        </Price>
        <Button type="button">Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart

-------------------------------------------------------------

Agora será feita a responsividade em vários dispositivos.
O container principal do estilo geral vai ser criado um media
query para atender os demais dispositivos.

