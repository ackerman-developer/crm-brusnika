import TableObject from '../../components/table/table-object/TableObject'
import styles from './ArchiveObject.module.scss'

export function ArchiveObject():JSX.Element{
  return(
    <div className={styles.container}>
      <h1>Объекты</h1>
      <div className={styles.content}>
        <TableObject/>
      </div>
    </div>
  )
}
