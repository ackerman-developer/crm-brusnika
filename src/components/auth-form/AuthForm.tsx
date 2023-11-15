import styles from './AuthForm.module.scss'

export function AuthForm():JSX.Element{
  return(
    <form className={styles.form}>
      <input
        className={styles.input}
      ></input>
      <button
        className={styles.button}
      >Войти</button>
    </form>
  )
}
