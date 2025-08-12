import React from 'react';
import styles from './Awards.module.css';

function Awards() {
    return ( 
       <div className={`${styles.container}`}>
            <div className='row'>
                <div className={`col-6 p-4 ${styles.imageContainer}`}>
                    <img src='media/images/largestBroker.svg' className={styles.images}/>
                </div>
                <div className={`col-6 p-5 ${styles.AwardsDetails}`}>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Grow</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    
                    <img src='media/images/pressLogos.png' alt='press logo' className={styles.pressLogosImage}/>
                </div>
            </div>
       </div>
     );
}

export default Awards;