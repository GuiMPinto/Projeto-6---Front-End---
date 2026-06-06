// IMPORTAÇÕES EXTERNAS
// link o Checkout para a lista de produtos
import { useNavigate } from 'react-router-dom'
// integrar o formulário ao React
import { useFormik } from 'formik'
// biblioteca para fazer a validação do campos
import * as Yup from 'yup'
// Mascaras
import ReactInputMask from 'react-input-mask'

// COMPONENTES
import Card from '../../components/Card'

//API
import { usePurchaseMutation } from '../../services/api' // POST

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

const Cartao = () => {
  // link o Checkout para a lista de produtos
  const navigate = useNavigate()

  const goToCheckOut = () => {
    navigate('/Checkout')
  }

  const goToCofirm = () => {
    navigate('/Confirmacao')
  }

  // hooks da api
  // [requisição, {estados da requisição}]
  const [purchase, { isLoading }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      nameCard: '',
      numCard: '',
      cvv: '',
      monthCard: '',
      yearCard: ''
    },
    validationSchema: Yup.object({
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
        products: [
          {
            id: 1,
            price: 123
          }
        ],
        delivery: {
          receiver: '',
          adress: {
            description: '',
            city: '',
            zipCode: Number(''),
            number: Number(''),
            complement: ''
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

  const getErrorMessage = (fieldName: string, message?: string) => {
    const estaAlterado = fieldName in form.touched
    const estaInvalido = fieldName in form.errors

    if (estaAlterado && estaInvalido) return message
    return ''
  }

  return (
    <Card>
      <CardContainer>
        <Overlay />
        <CardPreenchimento>
          <form onSubmit={form.handleSubmit}>
            <Titulo>Pagamento - Valor a pagar (importar elemento)</Titulo>
            <InputGroup>
              <label htmlFor="nameCard">Nome no Cartão</label>
              <input
                id="nomeCartao"
                type="text"
                name="nameCard"
                value={form.values.nameCard}
                onChange={form.handleChange}
              />
              <small>{getErrorMessage('nameCard', form.errors.nameCard)}</small>
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
                <small>{getErrorMessage('numCard', form.errors.numCard)}</small>
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
              <div onClick={goToCofirm}>
                <button
                  type="submit"
                  onClick={form.submitForm}
                  disabled={isLoading}
                >
                  {isLoading
                    ? 'Finalizando o pagamento'
                    : 'Finalizar pagamento'}
                </button>
              </div>
              <div onClick={goToCheckOut}>
                <button type="button">Voltar para edição do endereço</button>
              </div>
            </Botoes>
          </form>
        </CardPreenchimento>
      </CardContainer>
    </Card>
  )
}

export default Cartao
