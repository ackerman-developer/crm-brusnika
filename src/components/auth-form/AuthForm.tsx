import { useAppDispatch } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/use-auth'
import styles from './AuthForm.module.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAdmin } from '../../store/adminSlice/adminSlice'
import { AppRoute } from '../../utils/const'

export function AuthForm():JSX.Element{
  const [password, setPassword] = useState<string>("")
  const {isAuth} = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate(AppRoute.main)
      console.log('Авторизация успешна!')
    } else {
      console.log('Неверный пароль')
    }
  })

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setAdmin(password))
  }

  return(
    <form className={styles.form} onSubmit={handleAuth}>
      <input
        className={styles.input}
        type='password'
        placeholder='Введите пароль'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        className={styles.button}
        type='submit'
      >Войти</button>
    </form>
  )
}
