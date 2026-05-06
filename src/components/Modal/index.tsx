import closeIcon from '../../assets/images/close.png'
import { Cardapio } from '../ProductListPerfil'
//import { Prato } from '../ProductList'
import { formataPreco } from '../../utils/formatacao'
import { ModalContainer, PainelModal, BotaoModal, ModalContent } from './styles'
//import { add, open } from '../store/reducers/cart'

type Props = {
  product: Cardapio | null
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ product, isVisible, onClose }: Props) => {
  if (!isVisible || !product) return null

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
            <BotaoModal>
              Adicionar ao carrinho - {formataPreco(product.preco)}
            </BotaoModal>
          </div>
        </ModalContent>
      </ModalContainer>
    </PainelModal>
  )
}

export default Modal
