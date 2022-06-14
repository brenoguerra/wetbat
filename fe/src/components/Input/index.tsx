import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form";

import { Container, Label, Content, ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error = null, ...props }, ref) => {
  return (
    <div>
      <Container isErrored={!!error?.message}>
        <Label>{props.placeholder?.toUpperCase()}</Label>
        <Content
          ref={ref}
          {...props} 
          placeholder=''
        />
        
      </Container>
      
      { !!error && !!error.message && <ErrorMessage>{error.message}</ErrorMessage> }
    </div>
  )
}

export const Input = forwardRef(InputBase);