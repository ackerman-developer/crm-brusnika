import LandTable from '../../components/table/TableLand'
import { useAppSelector } from '../../hooks/redux-hooks'
import { getLands } from '../../store/land-data/land-data.selectors'
import styles from './MainScreen.module.scss'

export default function MainScreen():JSX.Element{
  const handleClick = () =>{
    console.log(lands)
  }

  const lands = useAppSelector(getLands)

  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Главная страница</h1>
        <button onClick={handleClick}>Выгрузить</button>
        <LandTable/>
      </div>
    </div>
  )
}
