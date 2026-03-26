import ProductsList from '../../components/ProductList'
import Game from '../../models/games'

// Imagens dos produtos
import resident from '../../assets/images/resident.png'

// Promoções

const pratosRestaurante: Game[] = [
  {
    id: 1,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 3,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 220,00']
  },
  {
    id: 4,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 5,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['10%', 'R$ 220,00']
  },
  {
    id: 6,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    image: resident,
    title: 'Resident Evil 4',
    infos: ['5%', 'R$ 290,00']
  }
]

const Perfil = () => (
  <>
    <ProductsList games={pratosRestaurante} />
  </>
)

export default Perfil
