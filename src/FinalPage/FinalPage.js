import logo from './logo.png';
import styles from './final_page.module.css';
import React from 'react'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className={styles['block']}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <p className={styles.paragraph}>Here's our restaurant recommendation:</p>
                    <p className={styles.winner}>Duff's Famous Wings</p>
                    <div className={styles['parent-block']}>
                    <a
                        className={styles.restart}
                        href="https://eats442-2bcd2.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Retake ↻
                    </a>
                    <a
                        className={styles.menu}
                        href="https://static1.squarespace.com/static/52ddad0ae4b01d8ef4e51a2e/t/5eac9828c4b8ff78fae0348f/1588369460308/Amherst_TakeOut_Feb2020.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open Menu
                    </a>
                        </div>
                </div>
            </header>
        </div>
    );
}

export default App;
