// import logo from './logo.svg';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import { fetchRepos, fetchUser, fetchZen } from './redux/features/github/githubSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchZen());
    dispatch(fetchUser());
    dispatch(fetchRepos());
  });
  return (
    <div className="App">
      <Header />
      <Home />
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
