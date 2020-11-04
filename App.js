import logo from '../src/logo.png';
import './App.css';
import styles from '../src/text_field.module.css';

const vals = []

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={styles['body']}>
          <img src={logo} className={styles.logo} alt="logo"/>
          <p className={styles.paragraph}>Enter specific food each person wants to eat (pizza, burgers, etc.):</p>
          <form>
            <label>
              User 1:
              <input type="text" name="user" id="user1" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser1Values} />
          </form>
          <form>
            <label>
              User 2:
              <input type="text" name="user" id="user2" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser2Values} />
          </form>
          <form>
            <label>
              User 3:
              <input type="text" name="user" id="user3" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser3Values} />
          </form>
          <form>
            <label>
              User 4:
              <input type="text" name="user" id="user4" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser4Values} />
          </form>
          <form>
            <label>
              User 5:
              <input type="text" name="user" id="user5" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser5Values} />
          </form>
          <form>
            <label>
              User 6:
              <input type="text" name="user" id="user6" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser6Values} />
          </form>
          <form>
            <label>
              User 7:
              <input type="text" name="user" id="user7" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser7Values} />
          </form>
          <form>
            <label>
              User 8:
              <input type="text" name="user" id="user8" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser8Values} />
          </form>
          <form>
            <label>
              User 9:
              <input type="text" name="user" id="user9" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser9Values} />
          </form>
          <form>
            <label>
              User 10:
              <input type="text" name="user" id="user10" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Submit" onClick={storeUser10Values} />
          </form>
          <form>
            <label>
              Location (city, state):
              <input type="text" name="location" id="location" />
            </label>
            <span id="result"> </span>
            <input type="submit" value="Finish" onClick={storeLocation} />
          </form>
        </div>
      </header>
    </div>
    );
}

function storeUser1Values(event) {
  vals.push(document.getElementById('user1').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser2Values(event) {
  vals.push(document.getElementById('user2').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser3Values(event) {
  vals.push(document.getElementById('user3').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser4Values(event) {
  vals.push(document.getElementById('user4').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser5Values(event) {
  vals.push(document.getElementById('user5').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser6Values(event) {
  vals.push(document.getElementById('user6').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser7Values(event) {
  vals.push(document.getElementById('user7').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser8Values(event) {
  vals.push(document.getElementById('user8').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser9Values(event) {
  vals.push(document.getElementById('user9').value)
  console.log(vals)
  event.preventDefault()
}

function storeUser10Values(event) {
  vals.push(document.getElementById('user10').value)
  console.log(vals)
  event.preventDefault()
}

function storeLocation(event) {
  vals.push(document.getElementById('location').value)
  console.log(vals)
  event.preventDefault()
}

export default App;
