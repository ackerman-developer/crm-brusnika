import CreateDealForm from '../../components/create-deal-form/CreateDealForm'
// import Header from '../../components/header/Header'
// import SideBar from '../../components/side-bar/SideBar'
import styles from './MainScreen.module.scss'

export default function MainScreen():JSX.Element{
  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Главная страница</h1>
        <CreateDealForm/>
      </div>
    </div>
  )
}
