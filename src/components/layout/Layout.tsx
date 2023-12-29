import { useState } from 'react';
import { Outlet } from "react-router";
import SideBar from "../side-bar/SideBar";
import Header from "../header/Header";
import styles from './Layout.module.scss'

export default function Layout(): JSX.Element{
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <div className={styles.side}>
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      </div>
      <div className={styles.header}>
        <Header isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <hr></hr>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <Outlet/>
      </div>
    </>
  )
}
