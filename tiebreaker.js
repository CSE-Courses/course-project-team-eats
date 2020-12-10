import logo from '../src/logo.png';
import './tiebreaker.css';
import styles from '../src/tiebreaker.module.css';

function random() {
  console.log("Will break the tie based on a random selection!")
}

function lowest_price() {
  console.log("Will break the tie based on lowest price!")
}

function highest_price() {
  console.log("Will break the tie based on highest price!")
}

function rating() {
  console.log("Will break the tie based on the highest rating!")
}

function distance() {
  console.log("Will break the tie based on the closest restaurant!")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={styles['body']}>
          <img src={logo} className={styles.logo} alt="logo"/>
          <p className={styles.paragraph}>In the case of 3 or more ties, how do you want to resolve them?</p>
          <button onClick={random}>
            Random Selection
          </button>
          <button onClick={lowest_price}>
            Lowest Price
          </button>
          <button onClick={highest_price}>
            Highest Price
          </button>
          <button onClick={rating}>
            Highest Rating
          </button>
          <button onClick={distance}>
            Shortest Distance
          </button>
        </div>
      </header>
    </div>
    );
}

export default App;
