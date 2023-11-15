import { useAppDispatch } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/use-auth'
import styles from './AuthForm.module.scss'
import { useState } from 'react'
import { setAdmin } from '../../store/adminSlice/adminSlice'

export function AuthForm():JSX.Element{
  const [password, setPassword] = useState<string>("")
  const {isAuth} = useAuth()
  const dispatch = useAppDispatch()

  const handleAuth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(setAdmin(password))

    if (isAuth) {
      console.log('Авторизация успешна!')
    } else {
      console.log('Неверный пароль')
    }
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
