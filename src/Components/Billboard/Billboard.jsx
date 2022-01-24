import React from 'react';
import styles from './Billboard.module.css';
import billboardHeroImg from './assets/billboard.webp'
import billboardHeroTitles from './assets/billboard-title.webp'
import PlayIcon from './PlayIcon'
import InfoIcon from './InfoIcon'

const Billboard= ()=>{
    return(
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt='img not found'/>
                <div className={styles.info}>
                    <img src={billboardHeroTitles} alt='Abstract: The art of Desing'/>
                    <div className={styles.description}>
                        Step inside the minds of the most innovative designers in a variety of disciplines and learn how
                        design impacts every aspect of life.
                    </div>
                    <div className={styles.links}>
                        <a href='/'>
                            <PlayIcon />
                            <span>Play</span>
                        </a>
                        <button>
                            <InfoIcon />
                            <span>More Info</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billboard