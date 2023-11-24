import { useState } from 'react';
import styles from './SideBar.module.scss';
import btn_right from '../../../assets/sider-ui.svg';
import btn_left from '../../../assets/sider-left.svg'
import logo from '../../../assets/logo.svg'
import btn_home from '../../../assets/home.svg'
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';

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
        <div className={`${styles.btn} ${isOpen ? styles.open : ''}`} onClick={toggleSidebar}>
          {!isOpen ? (
            <img src={btn_right} alt='' />
          ) : (
            <img src={btn_left} alt='' />
          )}
        </div>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.expanded : ''}`}>
        {!isOpen ? (
            <Link to={AppRoute.main}><img src={btn_home} alt=''/></Link>
          ) : (
            <Link to={AppRoute.main}><img src={btn_home} alt=''/> Главная</Link>
        )}
      </div>
    </div>
  )
}
