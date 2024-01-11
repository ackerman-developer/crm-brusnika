import { AppRoute } from '../../utils/const'
import { useNavigate } from 'react-router-dom'
import styles from './ArchiveLand.module.scss'
import imgBtn from '../../assets/createBtn.svg'
import LandTable from '../../components/table/table-land/TableLand'

export function ArchiveLand():JSX.Element{
  const navigate = useNavigate()
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Земельные участки</h1>
        <button onClick={() => navigate(AppRoute.createDeal)}><img src={imgBtn} alt=''/> Добавить</button>
      </div>
      <div className={styles.content}>
        <LandTable/>
      </div>
    </div>
  )
}
