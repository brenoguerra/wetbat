import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/auth'

import { SectionBox } from '../../components/SectionBox'
import { FaUser } from 'react-icons/fa'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container } from './styles'
import { useCallback, useState } from 'react'

interface SignUpFormData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

const signUpFormSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('E-mail is required').email('Invalid e-mail'),
  password: yup.string().required('Password is required'),
  passwordConfirmation: yup.string().required('Password confirmation is required').oneOf([yup.ref('password'), null], 'Passwords must be equal')
})

export const SignUp = () => {
  const [erroredForm, setErroredForm] = useState(false)
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signUpFormSchema)
  });
  const { errors } = formState;

  const handleSignUp: SubmitHandler<FieldValues> = useCallback(async (data, event) => {
    try {
      const { email, name, password, passwordConfirmation } = data as SignUpFormData;

      await api.post('/users/signup', { email, name, password, passwordConfirmation })

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
      <SectionBox title={'Sign Up'} icon={FaUser} isErrored={erroredForm}>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <Input
            placeholder='Name' 
            error={errors.name}
            {...register('name')}
          />
          <Input
            placeholder='E-mail' 
            error={errors.email}
            {...register('email')}
          />
          <Input 
            placeholder='Password' 
            type='password' 
            error={errors.password}
            {...register('password')}
          />
          <Input 
            placeholder='Password confirmation' 
            type='password' 
            error={errors.passwordConfirmation}
            {...register('passwordConfirmation')}
          />

          <Button type='submit'>Sign Up</Button>
        </form>

        <p className='clickableText'>Already have an account? <Link to='/login'>Sign in</Link></p>
      </SectionBox>
    </Container>
  )
}