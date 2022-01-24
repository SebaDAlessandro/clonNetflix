import React from 'react';
import styles from './SocialLinks.module.css';
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import TwitterIcon from './TwitterIcon'
import YoutubeIcon from './YoutubeIcon'

const SocialLinks= ()=>{
    return(
        <div className={styles.socialLinks}>
            <a href='facebook.com'className={styles.iconLinks}>
                <FacebookIcon/>
            </a>
            <a href='instagram.com'className={styles.iconLinks}>              
                <InstagramIcon/>
             </a>
            <a href='twitter.com'className={styles.iconLinks}>               
                <TwitterIcon/>
            </a>
            <a href='youtube.com'className={styles.iconLinks}>   
                <YoutubeIcon />
            </a>
        </div>
    )
}

export default SocialLinks