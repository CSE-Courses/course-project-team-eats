import React from 'react';
import styles from './People.module.css';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

export function People(){

    return(
        <div className={styles['body']}>

            <Link to='/'>  <img src={logo} className={styles.logo} alt="logo"></img></Link>

            <div className={styles['parent-block']}>

                <p className={styles.paragraph}>How many are going to eat?</p>
                <div classNameName={styles.block}>
                    
                    <Link to='/landing'> <button className={`button is-info is-hovered ${styles['select-button']}`}>2</button> </Link>
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>3</button></Link> 
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>4</button></Link> 
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>5</button></Link> 
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>6</button></Link> 
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>7</button></Link > 
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>8</button></Link > 
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>9</button></Link>
                    <Link to='/landing'>  <button className={`button is-info is-hovered ${styles['select-button']}`}>10</button></Link>

                </div>

            </div>


        </div>
    );
}