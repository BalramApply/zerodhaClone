import React from 'react';
import styles from './Hero.module.css';

function Hero() {
    return ( 
        <section className={styles.supportHero}>
        <div className={`p-5 ${styles.supportWrapper}`}>
        <h4 className="">Support Portal</h4>
        <a href='/'>Track Tickets</a>
      </div>

        <div className={` row p-5`}>
            <div className={`col-6 p-5 ${styles.topicsHead}`}>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eq, how do i activate F&O' className={styles.inputBox}/><br/>
                <a href='/'>Track account opening</a>
                <a href='/'>Track segment activation</a>
                <a href='/'>Intraday margins</a>
                <a href='/'>Kite user manual</a>
            </div>
            <div className={`col-6 p-5 ${styles.aboutSupport}`}>
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li><a href='/'>Current Takeover and Delisting - January 2024</a></li>
                    <li><a href='/'>Latest Intraday leverages - MIS & CO</a></li>
                </ol>
            </div>
      </div>
    </section>
     );
}

export default Hero;