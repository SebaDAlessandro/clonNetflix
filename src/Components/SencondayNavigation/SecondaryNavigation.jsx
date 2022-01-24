import React from 'react';
import styles from './SecondaryNavigation.module.css';
import Search from '../Search'
import Notification from '../Notification'
import UserMenu from '../UserMenu';
import BillboardSettings from '../BillboardSettings';

const SecondaryNavigation= ()=>{
    return(
        <div className={styles.box}>
            <div className={styles.navItems}>
                <Search />
            </div>
            <div className={styles.navItems}>
                <Notification />
            </div>
            <div className={styles.navItems}>    
                <UserMenu />
            </div>
            <div className={styles.navItems}>    
                <BillboardSettings />
            </div>
        </div>
    )
}

export default SecondaryNavigation