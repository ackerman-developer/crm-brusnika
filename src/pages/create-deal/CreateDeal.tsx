import CreateDealForm from '../../components/create-deal-form/CreateDealForm'
import styles from './CreateDeal.module.scss'

export default function CreateDeal ():JSX.Element {
  return(
    <div className={styles.container}>
      <CreateDealForm/>
    </div>
  )
}
