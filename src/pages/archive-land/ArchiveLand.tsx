import styles from './ArchiveLand.module.scss'
import { AppRoute } from '../../utils/const'
import { Link } from 'react-router-dom'

export default function ArchiveLand():JSX.Element{
  return(
    <div className={styles.container}>
      <h1>Архив объектов</h1>
      <Link to={AppRoute.createDeal}>Добавить</Link>
    </div>
  )
}
