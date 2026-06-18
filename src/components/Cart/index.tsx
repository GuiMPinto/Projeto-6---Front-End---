// IMPORTAÇÕES EXTERNAS
import { useDispatch, useSelector } from 'react-redux'
// link a lista de produtos para o Checkout
import { useNavigate } from 'react-router-dom'

// REDUX TOOLKIT
import { RootReducer } from '../../store'
// importa as actions do Reducer do carrinhoCompras
import { close, remove } from '../../store/reducers/carrinhoCompras'
// importa as actions do Reducer do carrinhoCompras
import { openForm } from '../../store/reducers/fomularioDados'

// COMPONENTES
import Button from '../Button'

// FUNÇÕES AUXILIARES
import { getValorTotal, formataPreco } from '../../utils/funcoesAux'

// CSS
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

  // link a lista de produtos para o Checkout
  const navigate = useNavigate()

  const dispatch = useDispatch()

  //função para fechar o Cart
  const closeCart = () => {
    dispatch(close())
  }

  const openCheckout = () => {
    dispatch(openForm())
    dispatch(close())
    navigate('/checkout')
  }
  //função para remover um item do carrinho de Compras
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length > 0 ? (
          <>
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
              <p>{formataPreco(getValorTotal(items))}</p>
            </Price>

            <Button onClick={openCheckout} type="button">
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">O carrinho está vazio...</p>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
