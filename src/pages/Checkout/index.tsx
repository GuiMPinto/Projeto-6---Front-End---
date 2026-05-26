// link o Checkout para a lista de produtos
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// componentes
import Card from '../../components/Card'

//reducer carrinho de compras
import { open, close } from '../../store/reducers/carrinhoCompras'

// integrar o formulário ao React
import { ErrorMessage, Field, useFormik } from 'formik'
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

const Checkout = () => {
  // hooks da api
  // [requisição, {estados da requisição}]
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  // link o Checkout para a lista de produtos
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  // itens usados com o Formik
  const form = useFormik({
    initialValues: {
      fullName: '',
      description: '',
      city: '',
      zipCode: '',
      numberContact: '',
      moreInfo: ''
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
      zipCode: Yup.string()
        .min(7, 'Número inadequado de caracteres')
        .max(7, 'Número inadequado de caracteres')
        .required('O campo é obrigatporio'),
      numberContact: Yup.string()
        .min(9, 'Número inadequado de caracteres')
        .max(9, 'Número inadequado de caracteres')
        .required('O campo é obrigatporio'),
      moreInfo: Yup.string()
        .min(3, 'Mais informação')
        .max(300, 'Menos informação')
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
          receiver: values.fullName,
          adress: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: values.numberContact,
            complement: values.moreInfo
          }
        }, // delivery

        payment: {
          card: {
            name: '',
            number: '',
            code: '',
            expires: {
              month: '',
              year: ''
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
        <Overlay>Overlay</Overlay>
        <CardPreenchimento>
          <form onSubmit={form.handleSubmit}>
            <Titulo>Entrega</Titulo>
            <InputGroup>
              <label htmlFor="fullName">Nome do cliente</label>
              <input
                id="nome"
                name="fullName"
                value={form.values.fullName}
                type="text"
                onChange={form.handleChange}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
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
                <input
                  id="cep"
                  name="zipCode"
                  value={form.values.zipCode}
                  type="text"
                  onChange={form.handleChange}
                />
                <small>{getErrorMessage('zipCode', form.errors.zipCode)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="numberContact">Cidade</label>
                <input
                  id="telefone"
                  name="numberContact"
                  value={form.values.numberContact}
                  type="text"
                  onChange={form.handleChange}
                />
                <small>
                  {getErrorMessage('numberContact', form.errors.numberContact)}
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
            </InputGroup>
            <Botoes>
              <button type="button" onClick={form.submitForm}>
                Continuar com o pagamento
              </button>
              <button type="button" onClick={openCart}>
                Voltar ao Carrinho
              </button>
            </Botoes>
          </form>
        </CardPreenchimento>
      </CardContainer>
    </Card>
  )
}

export default Checkout
