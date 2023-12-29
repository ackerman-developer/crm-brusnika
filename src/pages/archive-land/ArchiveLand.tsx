import styles from './ArchiveLand.module.scss'
import { AppRoute } from '../../utils/const'
import { useNavigate } from 'react-router-dom'
import imgBtn from '../../assets/createBtn.svg'
import LandTable from '../../components/table/TableLand'

export default function ArchiveLand():JSX.Element{
  const navigate = useNavigate()
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Архив объектов</h1>
        <button onClick={() => navigate(AppRoute.createDeal)}><img src={imgBtn} alt=''/> Добавить объект</button>
      </div>
      <div className={styles.content}>
        <LandTable/>
      </div>
    </div>
  )
}
