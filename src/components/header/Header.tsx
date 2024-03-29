import { SideBarProps } from '../../types/types'
import styles from './Header.module.scss'
import menuBtn from '../../assets/menu.svg'
import Watch from '../watch/Watch'

export default function Header({ isOpen, toggleSidebar }: SideBarProps):JSX.Element{
  return(
    <div className={`${styles.component} ${isOpen ? styles.open : ''}`}>
      <div className={styles.btn} onClick={toggleSidebar}>
        <img src={menuBtn} alt=''/>
      </div>
      <Watch/>
    </div>
  )
}
