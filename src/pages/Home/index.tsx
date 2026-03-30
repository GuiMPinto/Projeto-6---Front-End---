import ProductsList from '../../components/ProductList'
import Game from '../../models/games'

// Imagens dos produtos
import sushi from '../../assets/images/sushi.png'
import dolce from '../../assets/images/dolce.png'
import Header from '../../components/Header'

// Promoções

const promocoes: Game[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    title: 'Hioki Sushi',
    infos: ['Destaque da semana', 'Japonesa'],
    nota: '4.9'
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6'
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6'
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: dolce,
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    nota: '4.6'
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: dolce,
    nota: '4.6'
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    infos: ['Italiana'],
    image: dolce,
    nota: '4.6'
  }
]
const Home = () => (
  <>
    <Header />
    <ProductsList games={promocoes} />
  </>
)

export default Home
