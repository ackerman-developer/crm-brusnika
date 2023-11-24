import { useState } from 'react';
import styles from './SideBar.module.scss';
import btn_right from '../../../assets/sider-ui.svg';
import btn_left from '../../../assets/sider-left.svg'
import logo from '../../../assets/logo.svg'

export default function SideBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${styles.component} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.title} ${isOpen ? styles.open : ''}`}>
      <div className={styles.logoText}>
          {!isOpen ? (
            <img src={logo} alt='Logo' />
          ) : (
            <h1>Side Bar</h1>
          )}
        </div>
        <div className={styles.btn} onClick={toggleSidebar}>
          {!isOpen ? (
            <img src={btn_right} alt='' />
          ) : (
            <img src={btn_left} alt='' />
          )}
        </div>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.expanded : ''}`}>
      </div>
    </div>
  )
}
