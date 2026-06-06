import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({ type, to, onClick, children, disabled }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer type={type} onClick={onClick} disabled={disabled}>
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLink to={to as string}> {children} </ButtonLink>
}
export default Button
