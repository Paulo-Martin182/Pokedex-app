import * as S from './styles'
import { useRouter } from 'next/router'
import { AUTH_TOKEN } from 'utils/Auth/client'
import { ChangeEvent, useState } from 'react'

const Form = () => {
  const [user, setUser] = useState('')

  const router = useRouter()

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem(AUTH_TOKEN, user)
    router.push('/dashboard')
  }

  return (
    <S.Box>
      <S.Cubo />
      <S.Cubo />
      <S.Cubo />
      <S.Cubo />
      <S.Cubo />
      <S.Container>
        <S.DivForm>
          <S.ContentImage>
            <S.Title src="logo.png" />
          </S.ContentImage>
          <S.Form onSubmit={handleSubmit}>
            <S.InputBox>
              <S.Input type="text" placeholder="Seu melhor e-mail" />
            </S.InputBox>

            <S.InputBox>
              <S.Input
                type="text"
                onChange={(e) => setUser(e.target.value)}
                placeholder="Nome de usuário"
              />
            </S.InputBox>
            <S.InputSubmit type="submit" value="Login" />
          </S.Form>
        </S.DivForm>
      </S.Container>
    </S.Box>
  )
}

export default Form
