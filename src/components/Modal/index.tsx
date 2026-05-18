//Imagens
import closeIcon from '../../assets/images/close.png'

//Componentes
import { Cardapio } from '../ProductListPerfil'

// Utils
import { formataPreco } from '../../utils/formatacao'

//CSS
import { ModalContainer, PainelModal, BotaoModal, ModalContent } from './styles'

// Redux - actions -
import { open, add } from '../../store/reducers/carrinhoCompras'
import { useDispatch } from 'react-redux'

type Props = {
  product: Cardapio | null
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ product, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  if (!isVisible || !product) return null
  // função que abre o carrinho de compras
  const addToCart = () => {
    dispatch(add(product))
    dispatch(open())
  }

  return (
    <PainelModal className="visivel">
      <div className="overlay" onClick={onClose}></div>
      <ModalContainer>
        <img onClick={onClose} src={closeIcon} alt="ícone de fechar" />
        <ModalContent>
          <img src={product.foto} alt={product.nome} />
          <div>
            <h4>{product.nome}</h4>
            <p>{product.descricao}</p>
            <p>
              Serve de <span>{product.porcao}</span>
            </p>
            <BotaoModal onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(product.preco)}
            </BotaoModal>
          </div>
        </ModalContent>
      </ModalContainer>
    </PainelModal>
  )
}

export default Modal
