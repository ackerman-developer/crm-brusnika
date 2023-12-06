import styles from './InputSearch.module.scss'
import search from '../../assets/search.svg'

export default function InputSearch():JSX.Element{
  return(
    <div className={styles.component}>
      <input
        type='search'
        placeholder='Найти...'
      />
      <button type='submit'><img src={search} alt=''/></button>
    </div>
  )
}
