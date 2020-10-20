import React from 'react';
import {SubNavitem} from './SubNavitem/SubNavitem';
import styles from './SubNav.module.css';

export function SubNav(){

    return (
        <div className={styles.container}>
                <div className= {styles['sub-nav']}>
                    <div>
                        <SubNavitem label='Cuisine' icon='fa-utensils' />
                        <SubNavitem label='People' icon='fa-user-friends' />
                        <SubNavitem label='Distance' icon='fa-road' />
                        <SubNavitem label='More' icon='fa-info-circle' showRightBorder />

                    </div>
                    {/* <div>
                        <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                            <span className="icon">
                                <i className="fas fa-pen" />
                            </span>
                            <span>Write a review</span>
                        </button>

                        <button className={`button ${styles['subnav-button']} ${styles['omit-right-border']}`}>
                            <span className="icon">
                                <i className="fas fa-hotel" />
                            </span>
                            <span>For Businesses</span>
                        </button>

                    </div> */}


                </div>

    </div>
    );
}
