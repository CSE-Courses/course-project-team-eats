import React from 'react';
import logo from '../assets/logo.png';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './NavBar.module.css';
import {Link} from 'react-router-dom';

export function NavBar(props){

    return (
        <div className={styles['nav-bar']}>
            <Link to='/'><img src={logo} className={styles.logo} alt="belb_logo"></img></Link>
            <SearchBar small term={props.term} location={props.location} search={props.search}/>
            {/* <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button> */}
        </div>
    );
}