// IMPORTAÇÕES EXTERNAS
// link o Checkout para a lista de produtos
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

//importar UTILS
import { formataPreco, getValorTotal } from '../../utils/funcoesAux'

// integrar o formulário ao React
import { useFormik } from 'formik'

// biblioteca para fazer a validação do campos
import * as Yup from 'yup'

// mascaras
import ReactInputMask from 'react-input-mask'

//importar da API
import { usePurchaseMutation } from '../../services/api'

// COMPONENTES
import Card from '../../components/Card'

import { RootReducer } from '../../store'

// FUNÇÕES DO REDUCER DO CARRINHOS DE COMPRAS
import { closeForm } from '../../store/reducers/fomularioDados'
import { open, clear } from '../../store/reducers/carrinhoCompras'

//CSS
import {
  CardContainer,
  CardPreenchimento,
  Overlay,
  Titulo,
  InputGroup,
  Row,
  Botoes
} from './styles'

const Checkout = () => {
  // ---- POST ---- //
  // [requisição, {estados da requisição}]  --- hooks da api
  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()
  // -------------- //

  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const { items } = useSelector((state: RootReducer) => state.carroCompras)
  const dispatch = useDispatch()

  const closeCheckout = () => {
    dispatch(closeForm())
  }

  const navigate = useNavigate()
  const goToHome = () => {
    //limpar o formulario
    dispatch(clear())
    // ir para home
    navigate('/')
  }
  const goToCard = () => {
    closeCheckout()
    dispatch(open())
  }

  const [etapaAtual, setEtapaAtual] = useState<
    'entrega' | 'pagamento' | 'finalizado'
  >('entrega')

  const irParaPagamento = () => setEtapaAtual('pagamento')
  const irParaFinalizado = () => setEtapaAtual('finalizado')
  const voltarParaEntrega = () => setEtapaAtual('entrega')

  const enviarPagamentoEFinalizar = () => {
    //form.handleSubmit()
    form.submitForm()
    irParaFinalizado()
  }

  useEffect(() => {
    if (isSuccess && data) {
      irParaFinalizado()
      dispatch(clear())
    }
  }, [isSuccess, data, dispatch])

  // ---- TIPO DE DADOS QUE RECEBEM ---- //
  // itens usados com o Formik
  const form = useFormik({
    initialValues: {
      fullName: '',
      description: '',
      city: '',
      zipCode: '',
      numberContact: '',
      moreInfo: '',
      nameCard: '',
      numCard: '',
      cvv: '',
      monthCard: '',
      yearCard: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(4, 'Precisa ter mais de 4 carateres')
        .required('O campo é obrigatporio'),
      description: Yup.string()
        .min(4, 'Precisa ter mais de 4 carateres')
        .required('O campo é obrigatporio'),
      city: Yup.string()
        .min(4, 'Precisa ter mais de 4 carateres')
        .required('O campo é obrigatporio'),
      zipCode: Yup.number()
        .min(7, 'Número inadequado de caracteres')
        .max(7, 'Número inadequado de caracteres')
        .required('O campo é obrigatporio'),
      numberContact: Yup.number()
        .min(9, 'Número inadequado de caracteres')
        .max(9, 'Número inadequado de caracteres')
        .required('O campo é obrigatporio'),
      moreInfo: Yup.string()
        .min(3, 'Mais informação')
        .max(300, 'Menos informação')
        .required('O campo é obrigatporio'),
      nameCard: Yup.string()
        .min(8, 'Precisa ter mais de 8 carateres')
        .required('O campo é obrigatporio'),
      numCard: Yup.string()
        .min(4, 'Precisa ter mais de 4 carateres')
        .required('O campo é obrigatporio'),
      cvv: Yup.string()
        .min(3, 'Número inadequado de caracteres')
        .max(3, 'Número inadequado de caracteres')
        .required('O campo é obrigatporio'),
      monthCard: Yup.string()
        .min(2, 'Número inadequado de caracteres')
        .max(2, 'Número inadequado de caracteres')
        .required('O campo é obrigatporio'),
      yearCard: Yup.string()
        .min(4, 'Número inadequado de caracteres')
        .max(4, 'Número inadequado de caracteres')
        .required('O campo é obrigatporio')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => [
          {
            id: item.id,
            price: item.preco
          }
        ]),
        delivery: {
          receiver: values.fullName,
          adress: {
            description: values.description,
            city: values.city,
            zipCode: Number(values.zipCode),
            number: Number(values.numberContact),
            complement: values.moreInfo
          }
        }, // delivery

        payment: {
          card: {
            name: values.nameCard,
            number: values.numCard,
            code: values.cvv,
            expires: {
              month: Number(values.monthCard),
              year: Number(values.yearCard)
            }
          }
        }
      })
    }
  })
  // ----------------------------------- //

  // --------- MENSAGENS DE ERROR --------- //
  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }
  // -------------------------------------- //

  return (
    <Card>
      <CardContainer>
        <Overlay>Overlay</Overlay>
        <CardPreenchimento className={isOpen ? 'is-open' : ''}>
          <form onSubmit={form.handleSubmit}>
            {etapaAtual === 'entrega' ? (
              <>
                <Titulo>Entrega </Titulo>
                <InputGroup>
                  <label htmlFor="fullName">Nome do cliente</label>
                  <input
                    id="nome"
                    name="fullName"
                    value={form.values.fullName}
                    type="text"
                    onChange={form.handleChange}
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="description">Endereço</label>
                  <input
                    id="endereco"
                    name="description"
                    value={form.values.description}
                    type="text"
                    onChange={form.handleChange}
                  />
                  <small>
                    {getErrorMessage('description', form.errors.description)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    id="cidade"
                    name="city"
                    value={form.values.city}
                    type="text"
                    onChange={form.handleChange}
                  />
                  <small>{getErrorMessage('city', form.errors.city)}</small>
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <ReactInputMask
                      id="cep"
                      name="zipCode"
                      value={form.values.zipCode}
                      type="text"
                      onChange={form.handleChange}
                      mask="99999-999"
                    />
                    <small>
                      {getErrorMessage('zipCode', form.errors.zipCode)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="numberContact">Número de contato</label>
                    <ReactInputMask
                      id="telefone"
                      name="numberContact"
                      value={form.values.numberContact}
                      type="text"
                      onChange={form.handleChange}
                      mask="(99)99999-9999"
                    />
                    <small>
                      {getErrorMessage(
                        'numberContact',
                        form.errors.numberContact
                      )}
                    </small>
                  </InputGroup>
                </Row>
                <InputGroup>
                  <label htmlFor="moreInfo">Complemento (Opcional)</label>
                  <input
                    id="complemento"
                    name="moreInfo"
                    value={form.values.moreInfo}
                    type="text"
                    onChange={form.handleChange}
                  />
                  <small>
                    {getErrorMessage('moreInfo', form.errors.moreInfo)}
                  </small>
                </InputGroup>
                <Botoes>
                  <button
                    type="submit"
                    disabled={isLoading}
                    onClick={irParaPagamento}
                  >
                    {isLoading
                      ? 'Analisando os dados'
                      : 'Continuar com o pagamento'}
                  </button>

                  <button type="button" onClick={goToCard}>
                    Voltar ao Carrinho
                  </button>
                </Botoes>
              </>
            ) : etapaAtual === 'pagamento' ? (
              <>
                <Titulo>
                  Pagamento - Valor a pagar {formataPreco(getValorTotal(items))}
                </Titulo>
                <InputGroup>
                  <label htmlFor="nameCard">Nome no Cartão</label>
                  <input
                    id="nomeCartao"
                    type="text"
                    name="nameCard"
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                  />
                  <small>
                    {getErrorMessage('nameCard', form.errors.nameCard)}
                  </small>
                </InputGroup>
                <Row>
                  <InputGroup maxWidth="224px">
                    <label htmlFor="numCard">Número do Cartão</label>
                    <ReactInputMask
                      id="numCartao"
                      type="text"
                      name="numCard"
                      value={form.values.numCard}
                      onChange={form.handleChange}
                      mask="9999 9999 9999 9999"
                    />
                    <small>
                      {getErrorMessage('numCard', form.errors.numCard)}
                    </small>
                  </InputGroup>
                  <InputGroup maxWidth="88px">
                    <label htmlFor="cvv">CVV</label>
                    <ReactInputMask
                      id="idCVV"
                      type="text"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      mask="999"
                    />
                    <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="monthCard">Mês do Vencimento</label>
                    <ReactInputMask
                      id="mesVencimento"
                      type="text"
                      name="monthCard"
                      value={form.values.monthCard}
                      onChange={form.handleChange}
                      mask="99"
                    />
                    <small>
                      {getErrorMessage('monthCard', form.errors.monthCard)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="yearCard">Ano do Vencimento</label>
                    <ReactInputMask
                      id="anoVencimento"
                      type="text"
                      name="yearCard"
                      value={form.values.yearCard}
                      onChange={form.handleChange}
                      mask="9999"
                    />
                    <small>
                      {getErrorMessage('yearCard', form.errors.yearCard)}
                    </small>
                  </InputGroup>
                </Row>
                <Botoes>
                  <button
                    type="submit"
                    onClick={enviarPagamentoEFinalizar}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Analisando os dados' : 'Finalizar pagamento'}
                  </button>

                  <button type="button" onClick={voltarParaEntrega}>
                    Voltar para ao Endereço
                  </button>
                </Botoes>
              </>
            ) : (
              <>
                {data && (
                  <>
                    <Titulo>Pedido realizado - {data.orderId}</Titulo>
                    <p>
                      Estamos felizes em informar que seu pedido já está em
                      processo de preparação e, em breve, será entregue no
                      endereço fornecido.
                      <br />
                      <br />
                      Gostaríamos de ressaltar que nossos entregadores não estão
                      autorizados a realizar cobranças extras.
                      <br />
                      <br />
                      Lembre-se da importância de higienizar as mãos após o
                      recebimento do pedido, garantindo assim sua segurança e
                      bem-estar durante a refeição.
                      <br />
                      <br />
                      Esperamos que desfrute de uma deliciosa e agradável
                      experiência gastronômica.
                      <br />
                      Bom apetite!
                    </p>

                    <Botoes>
                      <button type="button" onClick={goToHome}>
                        Concluir
                      </button>
                    </Botoes>
                  </>
                )}
              </>
            )}
          </form>
        </CardPreenchimento>
      </CardContainer>
    </Card>
  )
}

export default Checkout
