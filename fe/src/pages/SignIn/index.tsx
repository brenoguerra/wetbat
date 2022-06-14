import { useCallback, useState } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'

import { SectionBox } from '../../components/SectionBox'
import { FaUser } from 'react-icons/fa'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container } from './styles'

interface SignInFormData {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required')
})

export const SignIn = () => {
  const [erroredForm, setErroredForm] = useState(false)
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<FieldValues> = useCallback(async (data, event) => {
    try {
      const { email, password } = data as SignInFormData;

      await signIn({
        email,
        password
      })
      navigate('/')
    } catch (error) {
      setErroredForm(true)
    }
  }, [signIn, navigate])

  return (
    <Container>
      <SectionBox title={'Sign In'} icon={FaUser} isErrored={erroredForm}>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <Input 
            placeholder='E-mail' 
            type='email' 
            error={errors.email}
            {...register('email')}
          />
          <Input 
            placeholder='Password' 
            type='password' 
            error={errors.password}
            {...register('password')}
          />

          <Button type='submit'>Sign In</Button>
        </form>

        <p className='clickableText'>Don't have an account yet? <Link to='/register'>Sign up</Link></p>
      </SectionBox>
    </Container>
  )
}