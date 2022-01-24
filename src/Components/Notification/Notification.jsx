import React from 'react';
import styles from './Notification.module.css';
import NotificationIcon from './NotificationIcon';

const Notification= ()=>{
    return(
        <div className={styles.notification}>
            <NotificationIcon />
        </div>
    )
}

export default Notification