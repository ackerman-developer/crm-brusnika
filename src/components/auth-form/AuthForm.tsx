import { useAppDispatch } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/use-auth'
import styles from './AuthForm.module.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../utils/const'
import { setUser } from '../../store/user-data/user-data.slice'
import logo from '../../assets/authLogo.svg'
import { UserData } from '../../types/userData'

export default function AuthForm():JSX.Element{
  const[authData, setAuthData] = useState<UserData>({
    login: '',
    password: ''
  })
  const isAuth = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate(AppRoute.main)
      console.log('Авторизация успешна!')
    } else if (!isAuth) {
      console.log('Неверный логин или пароль')
    }
  }, [isAuth, navigate])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAuthData({
      ...authData,
      [name]: value
    })
  }

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setUser(authData))
    // setAuthData({
    //   login: "",
    //   password: ""
    // })
  }

  return(
    <form className={styles.form} onSubmit={handleAuth}>
      <div className={styles.header}>
        <img src={logo} alt=''/>
        <h2 className="auth__form-title">
          Единый вход в CRM
        </h2>
      </div>
      <label>
        Адрес электронной почты
        <input
          type='text'
          placeholder='Введите почту'
          name='login'
          value={authData.login}
          onChange={handleChange}
        />
      </label>
      <label>
        Пароль
        <input
          type='password'
          placeholder='Введите пароль'
          name='password'
          value={authData.password}
          onChange={handleChange}
        />
      </label>
      <button
        className={styles.button}
        type='submit'
      >Войти</button>
      <div className={styles.footer}>
        Если Вы забыли логин или пароль или хотите зарегистироваться — <a href="">Обратитесь в Брусника.Помощь</a>
      </div>
    </form>
  )
}
