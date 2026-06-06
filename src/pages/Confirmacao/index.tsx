// COMPONENTES
import Card from '../../components/Card'

//REDUCER
import { clear } from '../../store/reducers/carrinhoCompras'

//REACT
import { useDispatch } from 'react-redux'

//CSS
import {
  CardContainer,
  CardPreenchimento,
  Overlay,
  Titulo,
  Botoes
} from './styles'
import { useEffect } from 'react'

const Confirmacao = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if (isSucess) {
  //     dispatch(clear())
  //   }
  // }, [isSucess, dispatch])

  // if (items.length === 0 && !isSucess){
  //   return <Navigate to"/" />
  // }
  return (
    <Card>
      <CardContainer>
        <Overlay>Overlay</Overlay>
        <CardPreenchimento>
          <Titulo>Pedido realizado -ORDER_ID-</Titulo>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica.
            <br />
            Bom apetite!
          </p>

          <Botoes>
            <button type="button">Concluir</button>
          </Botoes>
        </CardPreenchimento>
      </CardContainer>
    </Card>
  )
}

export default Confirmacao
