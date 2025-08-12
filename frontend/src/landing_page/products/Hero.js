import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return ( 
        <div className={`border-bottom ${styles.container}`}>
            <div className='text-center mt-5 p-3'>
            <h1>Technology</h1>
            <h3 className='text-muted mt-3 fs-4'>Sleek, modern and intuitive trading platforms</h3>
            <p className='mt-3 mb-5'>Check out our <a href="" className={styles.linksStyle}> investment offerings <i class="fa-solid fa-arrow-right"></i> </a> </p>
            </div>
        </div>
     );
}

export default Hero;