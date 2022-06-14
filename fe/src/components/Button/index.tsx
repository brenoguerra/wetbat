import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Container {...props}>
      <p>{children}</p>
    </Container>
  )
}