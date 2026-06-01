import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, to, onClick, children }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer type={type} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLink to={to as string}> {children} </ButtonLink>
}
export default Button
