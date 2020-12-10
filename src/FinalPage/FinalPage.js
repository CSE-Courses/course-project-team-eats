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
                    <p className={styles.winner}>404 NOT FOUND</p>
                    <div className={styles['parent-block']}>
                    <a
                        className={styles.restart}
                        href="https://eats442-2bcd2.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Retake ↻
                    </a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
