// componentes
import Card from '../../components/Card'

// integrar o formulário ao React
import { useFormik, ErrorMessage } from 'formik'
// biblioteca para fazer a validação do campos
import * as Yup from 'yup'

//importar da API
import { usePurchaseMutation } from '../../services/api'

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
  // hooks da api
  // [requisição, {estados da requisição}]
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()
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
            zipCode: '',
            number: '',
            complement: ''
          }
        }, // delivery

        payment: {
          card: {
            name: values.nameCard,
            number: values.numCard,
            code: values.cvv,
            expires: {
              month: values.monthCard,
              year: values.yearCard
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
                <input
                  id="numCartao"
                  type="text"
                  name="numCard"
                  value={form.values.numCard}
                  onChange={form.handleChange}
                />
                <small>{getErrorMessage('numCard', form.errors.numCard)}</small>
              </InputGroup>
              <InputGroup maxWidth="88px">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="idCVV"
                  type="text"
                  name="cvv"
                  value={form.values.cvv}
                  onChange={form.handleChange}
                />
                <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="monthCard">Mês do Vencimento</label>
                <input
                  id="mesVencimento"
                  type="text"
                  name="monthCard"
                  value={form.values.monthCard}
                  onChange={form.handleChange}
                />
                <small>
                  {getErrorMessage('monthCard', form.errors.monthCard)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="yearCard">Ano do Vencimento</label>
                <input
                  id="anoVencimento"
                  type="text"
                  name="yearCard"
                  value={form.values.yearCard}
                  onChange={form.handleChange}
                />
                <small>
                  {getErrorMessage('yearCard', form.errors.yearCard)}
                </small>
              </InputGroup>
            </Row>
            <Botoes>
              <button type="button" onClick={form.submitForm}>
                Finalizar pagamento
              </button>
              <button type="button">Voltar para edição do endereço</button>
            </Botoes>
          </form>
        </CardPreenchimento>
      </CardContainer>
    </Card>
  )
}

export default Cartao
