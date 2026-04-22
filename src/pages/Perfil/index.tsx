// Componentes
import ProductsListPerfil from '../../components/ProductListPerfil'
import PratosPerfil from '../../models/pratosPerfil'
import Banner from '../../components/BannerPerfil'

// Imagens dos produtos
import pizza from '../../assets/images/pizza.png'
import HeaderPerfil from '../../components/HeaderPerfil'

// Promoções

const pratosRestaurante: PratosPerfil[] = [
  {
    id: 1,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 2,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 4,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 5,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  },
  {
    id: 6,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    title: 'Pizza Marguerita'
  }
]

const Perfil = () => (
  <>
    <HeaderPerfil />
    <Banner />
    <ProductsListPerfil pratosPerfil={pratosRestaurante} />
  </>
)

export default Perfil
