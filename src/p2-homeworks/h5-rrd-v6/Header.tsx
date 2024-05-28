import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Pages'
import styles from './HW5.module.css'

function Header() {
  const [isShowHeader, setIsShowHeader] = useState<boolean>(false)

  function showHeader() {
    setIsShowHeader(true)
  }

  function hiddenHeader() {
    setIsShowHeader(false)
  }

  return (
    <>
      <nav className={`${styles.header} ${isShowHeader ? styles.animate : ''}`}>
        <NavLink to={PATH.PRE_JUNIOR}>{({ isActive }) => <span className={isActive ? styles.activeLink : undefined}>Pre-Junior</span>}</NavLink>
        <NavLink to={PATH.JUNIOR}>{({ isActive }) => <span className={isActive ? styles.activeLink : undefined}>Junior</span>}</NavLink>
        <NavLink to={PATH.JUNIOR_PLUS}>{({ isActive }) => <span className={isActive ? styles.activeLink : undefined}>Junior-plus</span>}</NavLink>
        <span className={styles.openBtn} onMouseMove={showHeader} onClick={hiddenHeader} id={'hw5-burger-menu'} />
      </nav>
    </>
  )
}

export default Header
