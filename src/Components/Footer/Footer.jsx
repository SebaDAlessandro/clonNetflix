import React from 'react';
import styles from './Footer.module.css';
import SocialLinks from '../SocialLinks'
import FooterLinks from '../FooterLinks' 

const Footer= ()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.socialLinks}>
            <SocialLinks />
            </div>
            <FooterLinks />
        </footer>
    )
}

export default Footer