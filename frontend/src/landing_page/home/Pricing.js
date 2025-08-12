import React from 'react';
import styles from './Pricing.module.css';

function Pricing() {
    return ( 
        <div className={styles.container}>
            <div className='row'>
                <div className={`col-4 ${styles.aboutPrice}`}>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges</p>
                    <a href="" className={styles.linksStyle}>See Pricing<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className={`col-6 ${styles.allPrice}`}>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>

                        <div className='col p-3 border'>
                            <h1 className=''>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;