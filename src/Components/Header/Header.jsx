import React from 'react'
import styles from "./Header.module.css"
const Header = () => {
  return (

  
    <div className={styles.header}>
      <h1 className={styles.h1}>Rafael Vieira</h1>

        <ul className={styles.ul}>
            <li>
                Sobre
            </li>
            <li>
                Projetos
            </li>
            <li>
                Estudos
            </li>
            <li>
                Projetos
            </li>
        </ul>
      
    </div>
  )
}

export default Header
