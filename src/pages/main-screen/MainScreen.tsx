import SideBar from '../../components/layout/side-bar/SideBar'
import styles from './MainScreen.module.scss'

export default function MainScreen():JSX.Element{
  return(
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.content}>
        <h1>Главная страница</h1>
      </div>
    </div>
  )
}
