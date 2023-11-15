import { AuthForm } from '../../components/auth-form/AuthForm'
import styles from './Authorization.module.sass'

export function Authorization ():JSX.Element{
  return(
    <div className={styles.auth}>
      <AuthForm/>
    </div>
  )
}
