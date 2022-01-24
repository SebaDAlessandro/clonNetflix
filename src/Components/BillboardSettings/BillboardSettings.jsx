import React from 'react';
import styles from './BillboardSettings.module.css';
import SettingsIcons from './SettingsIcon'

const BillboardSettings= ()=>{
    return(
        <div className = {styles.billboardSettings}>
            <SettingsIcons />
        </div>  
    )
}

export default BillboardSettings