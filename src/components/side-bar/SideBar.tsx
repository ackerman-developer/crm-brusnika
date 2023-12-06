import styles from './SideBar.module.scss';
import logo from '../../assets/logo.svg'
import btn_home from '../../assets/home.svg'
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { SideBarProps } from '../../types/types';

export default function SideBar({ isOpen }: SideBarProps): JSX.Element{
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
