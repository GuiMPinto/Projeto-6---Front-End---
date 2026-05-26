// Ferramenta reponsável por fazer o link para as páginas.
import { Link } from 'react-router-dom'

//Reducer -actions-
import { open } from '../../store/reducers/carrinhoCompras'
import { useDispatch, UseDispatch, useSelector } from 'react-redux'

// CSS
import { HeaderBar, CartButton } from './styles'

// imagens
import logo from '../../assets/images/efoodLogo.png'
import fundoHeader from '../../assets/images/fundoHeader.png'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()

  // items: o array que armazena os pratos adicionados ao carrinho de Compras
  const { items } = useSelector((state: RootReducer) => state.carroCompras)
  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderBar style={{ backgroundImage: `url(${fundoHeader})` }}>
      <div className="container">
        <Link to="/">
          <h1>Restaurantes</h1>
        </Link>

        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <CartButton onClick={openCart} style={{ cursor: 'pointer' }}>
          ({items.length}) pedidos no carrinho
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default Header
