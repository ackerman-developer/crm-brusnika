import { useAppDispatch } from '../../hooks/redux-hooks'
import { fetchLands } from '../../store/land-data/api-action'
import styles from './MainScreen.module.scss'

export default function MainScreen():JSX.Element{
  const dispatch = useAppDispatch()

  const handleClick = () =>{
    dispatch(fetchLands())
    console.log()
  }

  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Главная страница</h1>
        <button onClick={handleClick}>Выгрузить</button>
      </div>
    </div>
  )
}
