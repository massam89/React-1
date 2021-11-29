import HobbyList from './components/HobbyList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Extreme Hobbies</h1>
        <HobbyList />

      </header>
      <footer>&copy; 2021 Created By Marzieh !</footer>
    </div>
  );
}

export default App;