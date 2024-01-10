import CreateDealForm from '../../components/create-deal-form/CreateDealForm'
import styles from './CreateLand.module.scss'

export function CreateLand ():JSX.Element {
  return(
    <div className={styles.container}>
      <CreateDealForm/>
    </div>
  )
}
