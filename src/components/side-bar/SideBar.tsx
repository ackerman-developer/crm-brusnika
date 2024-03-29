import styles from './SideBar.module.scss';
import logo from '../../assets/logo.svg'
import btnHome from '../../assets/home.svg'
import btnDeal from '../../assets/deal.svg'
import iconLogo from '../../assets/icon-logo.svg'
import tasks from '../../assets/tasks.svg'
import object from '../../assets/object.svg'
// import logaut from '../../assets/logaut.svg'
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { SideBarProps } from '../../types/types';

export default function SideBar({ isOpen }: SideBarProps): JSX.Element{
  return (
    <div className={`${styles.component} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.title} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logoText}>
          {!isOpen ? (
            <div className={styles.logo}>
              <img src={logo} alt='Logo' />
            </div>
          ) : (
            <div className={styles.iconlogo}>
              <img src={iconLogo} alt='Logo' />
            </div>
          )}
        </div>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.expanded : ''}`}>
        {!isOpen ? (
          <>
            <Link to={AppRoute.main}><img src={btnHome} alt=''/></Link>
            <Link to={AppRoute.archiveLand}><img src={btnDeal} alt=''/></Link>
            <Link to={AppRoute.archiveObject}><img src={object} alt=''/></Link>
            <Link to={AppRoute.tasks}><img src={tasks} alt=''/></Link>
            {/* <div className={styles.logaut}>
              <Link to={AppRoute.auth}><img src={logaut} alt=''/></Link>
            </div> */}
          </>
        ) : (
          <>
            <Link to={AppRoute.main}><img src={btnHome} alt=''/>Главная</Link>
            <Link to={AppRoute.archiveLand}><img src={btnDeal} alt=''/>Земельные участки</Link>
            <Link to={AppRoute.archiveObject}><img src={tasks} alt=''/>Объекты</Link>
            <Link to={AppRoute.tasks}><img src={object} alt=''/>Задачи</Link>
            {/* <div className={styles.logaut}>
              <Link to={AppRoute.auth}><img src={logaut} alt=''/>Выйти</Link>
            </div> */}
          </>
        )}
      </div>
    </div>
  )
}
