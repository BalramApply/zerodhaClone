import React from 'react';
import styles from './OpenAccount.module.css';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className={`p-5 ${styles.container}`}>
                    <div className={`row text-center ${styles.BtnCenter}`}>
    
                        <h1 className='mt-5'>Open a Zerodha account</h1>
                        <p>Modern platforms apps 0 investment, and flat 20 intraday and F&O trades </p>
                        
                        <Link to="/signup"><button className={`btn btn-primary ${styles.heroButton}`}>Sign up Now</button></Link>
                    </div>
                </div>
     );
}

export default OpenAccount;