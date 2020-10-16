import React from 'react';
import styles from './StarterPage.module.css';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

export function StarterPage(){

    return(
        
            <div className={styles.body}>

            <Link to='/'>  <img src={logo} className={styles.logo} alt="logo"></img> </Link>  
                <div className={styles.block}>
                  <p className={styles.paragraph}>Click to get started!</p> 
                <Link to='/people' > <button className={`button is-info is-rounded ${styles['start-button']}`}>
                    Let's Eat!</button>
                </Link>
                </div>
                

            </div>
        
    );
}