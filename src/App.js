import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
