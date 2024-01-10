import { Helmet } from 'react-helmet-async'
import styles from './MainScreen.module.scss'

export function MainScreen():JSX.Element{
  return(
    <div className={styles.container}>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <div className={styles.content}>
        <h1>Главная страница</h1>
      </div>
    </div>
  )
}
