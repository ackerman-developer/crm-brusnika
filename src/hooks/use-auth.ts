import { useAppSelector } from "./redux-hooks";

const ADMIN_LOGIN = 'brusnika@brus.me'//Пароль от сервиса
const ADMIN_PASSWORD = 'brusnika'//Пароль от сервиса

export function useAuth(){
  const {password, login} = useAppSelector(state => state.USER)

  return{
    isAuth:
      login !== '' &&
      login === ADMIN_LOGIN &&
      password !== '' &&
      password === ADMIN_PASSWORD
  }
}
