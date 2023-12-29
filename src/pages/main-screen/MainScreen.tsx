import LandTable from '../../components/table/TableLand'
import styles from './MainScreen.module.scss'

export default function MainScreen():JSX.Element{
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Главная страница</h1>
        <LandTable/>
      </div>
    </div>
  )
}
