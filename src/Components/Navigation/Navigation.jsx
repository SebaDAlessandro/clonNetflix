import React from 'react';
import styles from './Navigation.module.css';
import logo from './assets/logo.png'
import SecondaryNavigation from '../SencondayNavigation'

const Navigation= ()=>{
    const navItems =[
        'Home',
        'TV Shows',
        'Movies',
        'New & Popular',
        'My List'
    ]
    return(
        <div className={styles.navigation}>
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={logo} alt="logo not found"/>
                <ul className={styles.navigationList}>
                    {navItems.map((item)=>(
                        <li className={styles.navigationItem} key={item}>
                        <a href='/'>{item}</a>
                        {/* hago la etiqueta a solo para imitar el comportamiento, no dirige a ninun
                        lugar */}
                        </li>
                    ))}
                </ul>
            </div>
            <SecondaryNavigation/>
        </div>
    )
}

export default Navigation